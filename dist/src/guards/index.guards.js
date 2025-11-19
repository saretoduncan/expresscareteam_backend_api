"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshJwtGuard = void 0;
const passport_1 = require("@nestjs/passport");
class RefreshJwtGuard extends (0, passport_1.AuthGuard)("refreshJwt") {
}
exports.RefreshJwtGuard = RefreshJwtGuard;
//# sourceMappingURL=index.guards.js.map