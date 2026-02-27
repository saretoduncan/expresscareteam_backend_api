import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";

export function MaxWords(max: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "maxWords",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [max],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) return true;
          const maxwords = args.constraints[0];
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount <= maxwords;
        },
        defaultMessage(args: ValidationArguments) {
          const maxWords = args.constraints[0];
          return `${args.property} must be at most ${maxWords} words}`;
        },
      },
    });
  };
}
