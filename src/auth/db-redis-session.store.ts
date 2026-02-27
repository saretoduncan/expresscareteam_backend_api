import { RedisService } from "src/redis/redis.service";
import { AuthSessionEntity } from "./session.entity";
import { Repository } from "typeorm";
import { SessionData, Store } from "express-session";

export class DbRedisStore extends Store {
  constructor(
    private readonly redisService: RedisService,
    private sessionRepo: Repository<AuthSessionEntity>,
    private ttl: number,
  ) {
    super();
  }
  async get(
    sid: string,
    callback: (err: any, session?: SessionData | null) => void,
  ) {
    try {
      const cached = await this.redisService.get(sid);
      if (cached) return callback(null, JSON.parse(cached));

      const session = await this.sessionRepo.findOne({
        where: {
          session_id: sid,
        },
      });

      if (!session) return callback(null);
      if (Date.now() * 1000 > session.expires_at) {
        await this.sessionRepo.delete({ session_id: sid });
        return callback(null);
      }
      const remainingTEx = session.expires_at - Date.now() * 1000;
      await this.redisService.set(sid, session.data, remainingTEx / 1000);
      callback(null, JSON.parse(session.data));
    } catch (err) {
      callback(err);
    }
  }
  async set(sid: string, session: SessionData, callback?: (err?: any) => void) {
    try {
      const expires_at = Date.now() + this.ttl;
      const sessionString = JSON.stringify(session);
      await this.sessionRepo.save({
        session_id: sid,
        data: sessionString,
        expires_at: expires_at,
      });
      await this.redisService.set(sid, sessionString, this.ttl / 1000);
      if (callback) callback();
    } catch (err) {
      if (callback) callback(err);
    }
  }
  async destroy(sid: string, callback?: (err?: any) => void) {
    try {
      await this.sessionRepo.delete({ session_id: sid });
      await this.redisService.del(sid);
      if (callback) callback();
    } catch (err) {
      if (callback) callback(err);
    }
  }
}
