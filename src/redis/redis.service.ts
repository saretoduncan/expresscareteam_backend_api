import { Inject, Injectable } from "@nestjs/common";
import { RedisClientType } from "redis";

@Injectable()
export class RedisService {
  constructor(
    @Inject("REDIS_CLIENT") private readonly redis: RedisClientType
  ) {}
  async set(key: string, value: string, ttl?: number) {
    if (ttl) {
      await this.redis.set(key, value, { EX: ttl });
    } else {
      await this.redis.set(key, value);
    }
  }
  async get(key: string) {
    return await this.redis.get(key);
  }
  async del(key: string) {
    const val = await this.get(key);
    if (val) {
      await this.redis.del(key);
    }
    return;
  }
}
