"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordJwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
let ResetPasswordJwtStrategy = class ResetPasswordJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, "resetPasswordJwt") {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.RESET_PASSWORD_TOKEN_SECRET,
        });
    }
    validate(payload) {
        try {
            if (!payload.sub || !payload.username || !payload.roles) {
                throw new common_1.UnauthorizedException("invalid access token");
            }
            return payload;
        }
        catch (e) {
            throw new common_1.UnauthorizedException(e.message);
        }
    }
};
exports.ResetPasswordJwtStrategy = ResetPasswordJwtStrategy;
exports.ResetPasswordJwtStrategy = ResetPasswordJwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ResetPasswordJwtStrategy);
//# sourceMappingURL=resetPasswordJwt.strategy.js.map