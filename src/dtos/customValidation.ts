import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ async: false })
export class MatchPasswordConstraint implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments
  ): Promise<boolean> | boolean {
    const object = validationArguments?.object as any;
    return value === object.password;
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return "Password and confirm Password doesn't match";
  }
}

export function MatchPasswords(validationOptions?: ValidationOptions) {
  return (obj: Object, propertyName: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: MatchPasswordConstraint,
    });
  };
}
