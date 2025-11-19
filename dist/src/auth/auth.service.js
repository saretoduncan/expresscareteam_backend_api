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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const adult_home_service_1 = require("../adult-home/adult-home.service");
const enums_1 = require("../common/enums");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
const email_service_1 = require("../email/email.service");
const redis_service_1 = require("../redis/redis.service");
let AuthService = class AuthService {
    userService;
    adultHomeService;
    jwtService;
    emailService;
    redisService;
    userRepo;
    constructor(userService, adultHomeService, jwtService, emailService, redisService, userRepo) {
        this.userService = userService;
        this.adultHomeService = adultHomeService;
        this.jwtService = jwtService;
        this.emailService = emailService;
        this.redisService = redisService;
        this.userRepo = userRepo;
    }
    async signJwtToken(username, id, roles, secret, expireTime) {
        return await this.jwtService.signAsync({ username: username, sub: id, roles: roles }, { expiresIn: Number(expireTime), secret: secret });
    }
    async signRefresherToken(username, id, roles) {
        return await this.signJwtToken(username, id, roles, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_EXPIRY_TIME);
    }
    setCookie(res, token) {
        res.cookie(process.env.REFRESH_TOKEN_KEY, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: Number(process.env.REFRESH_TOKEN_EXPIRY_TIME),
            path: "/",
        });
    }
    async registerCaregiver(registerCaregiverDto, res) {
        try {
            const newUser = await this.userService.createUser({
                email: registerCaregiverDto.email,
                password: registerCaregiverDto.password,
                role: enums_1.RoleEnum.CAREGIVER,
            });
            const newCaregiver = await this.userService.addCaregiver({
                firstName: registerCaregiverDto.firstName,
                lastName: registerCaregiverDto.lastName,
                dateOfBirth: registerCaregiverDto.dateOfBirth,
                email: newUser.username,
                gender: registerCaregiverDto.gender,
                phoneNumber: registerCaregiverDto.phoneNumber,
                city: registerCaregiverDto.city,
                state: registerCaregiverDto.state,
                street: registerCaregiverDto.street,
                zipcode: registerCaregiverDto.zipcode,
                userId: newUser.id,
            });
            const accessToken = await this.signJwtToken(newUser.username, newUser.id, newUser.roles.map((role) => role.name), process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRY_TIME);
            const refreshToken = await this.signRefresherToken(newUser.username, newUser.id, newUser.roles.map((role) => role.name));
            this.setCookie(res, refreshToken);
            return { ...newCaregiver, accessToken };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async registerProvider(registerProviderDto, res) {
        try {
            const [newUser, newHome] = await Promise.all([
                this.userService.createUser({
                    email: registerProviderDto.email,
                    password: registerProviderDto.password,
                    role: enums_1.RoleEnum.HOMEREPRESENTATIVE,
                }),
                this.adultHomeService.createAdultHome({
                    name: registerProviderDto.adult_home_name,
                    email: registerProviderDto.adult_home_email,
                    phone: registerProviderDto.adult_home_phone,
                    city: registerProviderDto.adult_home_city,
                    state: registerProviderDto.adult_home_state,
                    street: registerProviderDto.adult_home_street,
                    zipcode: registerProviderDto.adult_home_zipcode,
                    website: registerProviderDto.adult_home_website,
                }),
            ]);
            const newHomeRep = await this.userService.createHomeRep({
                firstName: registerProviderDto.first_name,
                lastName: registerProviderDto.last_name,
                email: newUser.username,
                phoneNumber: registerProviderDto.phone_number,
                jobTitle: registerProviderDto.job_title,
                userId: newUser.id,
                adultHomeId: newHome.id,
            });
            const accessToken = await this.signJwtToken(newUser.username, newUser.id, newUser.roles.map((role) => role.name), process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRY_TIME);
            const refreshToken = await this.signRefresherToken(newUser.username, newUser.id, newUser.roles.map((role) => role.name));
            this.setCookie(res, refreshToken);
            return { ...newHomeRep, accessToken };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async loginUser(user, res) {
        try {
            const accessToken = await this.signJwtToken(user.username, user.id, user.roles.map((role) => role.name), process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRY_TIME);
            const refreshToken = await this.signRefresherToken(user.username, user.id, user.roles.map((role) => role.name));
            this.setCookie(res, refreshToken);
            return { ...user, accessToken };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async validateUser(username, password) {
        try {
            username = username.trim();
            if (!username)
                throw new common_1.HttpException("USERNAME field cannot be left empty", common_1.HttpStatus.BAD_REQUEST);
            const user = await this.userRepo.findOne({
                where: {
                    username: username,
                },
                relations: {
                    roles: true,
                    caregiver: true,
                    adultHomeRepresentative: true,
                },
            });
            if (!user) {
                throw new common_1.HttpException("User is not registered with us", common_1.HttpStatus.UNAUTHORIZED);
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return null;
            }
            const { password: Pass, ...restUser } = user;
            return restUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async refreshToken(username, id, roles) {
        try {
            const accessToken = await this.signJwtToken(username, id, roles, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRY_TIME);
            return {
                accessToken: accessToken,
            };
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sendUpdatePassOtp(email) {
        try {
            const user = await this.userService.getUserByUsername(email);
            const otpCode = Math.floor(100000 + Math.random() * 900000);
            await this.redisService.set(user.username, otpCode.toString(), 60 * 10);
            await this.emailService
                .sendPasswordResetCodeMail(email, user.adultHomeRepresentative?.firstName ??
                user.caregiver?.firstName ??
                "", otpCode.toString())
                .catch((err) => console.error("email job failed", err));
        }
        catch (e) {
            throw new common_1.HttpException(e.message, e.statusCode);
        }
    }
    async verifyResetOtp(email, otpCode) {
        const getOtp = await this.redisService.get(email);
        if (!getOtp)
            throw new common_1.UnauthorizedException("The OTP is invalid");
        if (getOtp !== otpCode)
            throw new common_1.UnauthorizedException("The OTP is invalid");
        const user = await this.userRepo.findOne({
            where: {
                username: email,
            },
            relations: {
                roles: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException("The Otp is Invalid");
        }
        const accessToken = await this.signJwtToken(user.username, user.id, user.roles.map((r) => r.name), process.env.RESET_PASSWORD_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRY_TIME);
        await this.redisService.del(email);
        return { accessToken: accessToken };
    }
    async updatePassword(password, id) {
        try {
            const user = await this.userRepo.findOne({
                where: {
                    id: id,
                },
            });
            if (!user)
                throw new common_1.UnauthorizedException("The OTP is invalid");
            console.log(user);
            await this.userService.updatePassword(user.id, password);
            return;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async logout(res) {
        res.clearCookie(process.env.REFRESH_TOKEN_KEY);
        return;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        adult_home_service_1.AdultHomeService,
        jwt_1.JwtService,
        email_service_1.EmailService,
        redis_service_1.RedisService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map