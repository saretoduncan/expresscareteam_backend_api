import { Strategy } from "passport-jwt";
import { JwtPayloadDto } from "src/dtos/auth.dtos";
import { UsersService } from "src/users/users.service";
declare const RefreshJwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class RefreshJwtStrategy extends RefreshJwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: JwtPayloadDto): Promise<import("../dtos/users.dtos").UserResponseDto>;
}
export {};
