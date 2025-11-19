"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchPasswordConstraint = void 0;
exports.MatchPasswords = MatchPasswords;
const class_validator_1 = require("class-validator");
let MatchPasswordConstraint = class MatchPasswordConstraint {
    validate(value, validationArguments) {
        const object = validationArguments?.object;
        return value === object.password;
    }
    defaultMessage(validationArguments) {
        return "Password and confirm Password doesn't match";
    }
};
exports.MatchPasswordConstraint = MatchPasswordConstraint;
exports.MatchPasswordConstraint = MatchPasswordConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], MatchPasswordConstraint);
function MatchPasswords(validationOptions) {
    return (obj, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: obj.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: MatchPasswordConstraint,
        });
    };
}
//# sourceMappingURL=customValidation.js.map