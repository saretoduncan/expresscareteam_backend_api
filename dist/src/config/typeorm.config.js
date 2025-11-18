"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainSeeder_1 = require("../database/seeders/mainSeeder");
const options = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    seeds: [mainSeeder_1.default],
};
exports.default = options;
//# sourceMappingURL=typeorm.config.js.map