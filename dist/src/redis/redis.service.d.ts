import { RedisClientType } from "redis";
export declare class RedisService {
    private readonly redis;
    constructor(redis: RedisClientType);
    set(key: string, value: string, ttl?: number): Promise<void>;
    get(key: string): Promise<string | null>;
    del(key: string): Promise<void>;
}
