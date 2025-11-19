import { Strategy } from "passport-jwt";
import { JwtPayloadDto } from "src/dtos/auth.dtos";
declare const ResetPasswordJwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithoutRequest] | [opt: import("passport-jwt").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class ResetPasswordJwtStrategy extends ResetPasswordJwtStrategy_base {
    constructor();
    validate(payload: JwtPayloadDto): JwtPayloadDto;
}
export {};
