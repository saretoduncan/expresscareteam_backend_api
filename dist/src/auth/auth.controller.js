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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const auth_dtos_1 = require("../dtos/auth.dtos");
const swagger_1 = require("@nestjs/swagger");
const index_guards_1 = require("../guards/index.guards");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(req, res) {
        const user = req.user;
        const loggedInUser = await this.authService.loginUser(user, res);
        return loggedInUser;
    }
    async registerCaregiver(req, res) {
        const user = await this.authService.registerCaregiver(req, res);
        return user;
    }
    async registerProvider(req, res) {
        const user = await this.authService.registerProvider(req, res);
        return user;
    }
    async refreshToken(req, res) {
        const token = await this.authService.refreshToken(req.user.username, req.user.id, req.user.roles.map((r) => r.name));
        return token;
    }
    async logout(res) {
        await this.authService.logout(res);
        return;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("local")),
    (0, swagger_1.ApiOperation)({
        summary: "Authenticate user with email/username  and password",
    }),
    (0, swagger_1.ApiBody)({ type: auth_dtos_1.LoginUserDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Login successfull. Return JWT and user info.",
        type: auth_dtos_1.AuthUserResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: "Unauthorized – invalid credentials",
    }),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: "Register a new caregiver account",
        description: "Creates a new caregiver user account with the provided details.",
    }),
    (0, swagger_1.ApiBody)({ type: auth_dtos_1.RegisterCaregiverDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Caregiver registered successfully. Returns the authenticated user info and JWT.",
        type: auth_dtos_1.AuthUserResponseDto,
    }),
    (0, common_1.Post)("register/caregiver"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dtos_1.RegisterCaregiverDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerCaregiver", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: "Register a new provider account",
        description: "Creates a new provider user account with the provided details.",
    }),
    (0, swagger_1.ApiBody)({ type: auth_dtos_1.RegisterProviderDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Provider registered successfully. Returns the authenticated user info and JWT.",
        type: auth_dtos_1.AuthUserResponseDto,
    }),
    (0, common_1.Post)("register/provider"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dtos_1.RegisterProviderDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerProvider", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: "Refresh Access Token",
        description: "create a new access token using the refresh token",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Access token refreshed successfully",
        type: auth_dtos_1.RefreshAccessTokenResponseDto,
    }),
    (0, common_1.UseGuards)(index_guards_1.RefreshJwtGuard),
    (0, common_1.Post)("refreshAccessToken"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: "Logout user",
        description: "Logs out the user and clears authentication cookies.",
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "User logged out successfully",
    }),
    (0, common_1.Post)("logout"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map