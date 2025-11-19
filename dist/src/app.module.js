"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const adult_home_module_1 = require("./adult-home/adult-home.module");
const typeorm_1 = require("@nestjs/typeorm");
const email_module_1 = require("./email/email.module");
const redis_module_1 = require("./redis/redis.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: "postgres",
                    url: process.env.DATABASE_URL,
                    ssl: process.env.NODE_ENV === "production"
                        ? { rejectUnauthorized: false }
                        : false,
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            adult_home_module_1.AdultHomeModule,
            email_module_1.EmailModule,
            redis_module_1.RedisModule,
        ],
        providers: [],
        exports: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map