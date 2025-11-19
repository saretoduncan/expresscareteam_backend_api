import { Strategy } from "passport-jwt";
import { JwtPayloadDto } from "src/dtos/auth.dtos";
declare const AccessJwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class AccessJwtStrategy extends AccessJwtStrategy_base {
    constructor();
    validate(payload: JwtPayloadDto): JwtPayloadDto;
}
export {};
