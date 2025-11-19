import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
export declare class MatchPasswordConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage?(validationArguments?: ValidationArguments): string;
}
export declare function MatchPasswords(validationOptions?: ValidationOptions): (obj: Object, propertyName: string) => void;
