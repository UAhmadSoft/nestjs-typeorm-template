import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export class AuthLoginDto {
  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true, example: 'Str0ngP@ssw0rd!' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
export class AuthGoogleDto {
  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: false, example: true })
  @IsNotEmpty()
  @IsBoolean()
  readonly is_social_login: boolean;

  @ApiProperty({ required: true, example: 'device-uuid-1234' })
  @IsNotEmpty()
  @IsString()
  readonly device_id: string;
}
export class AuthSignUpDto {
  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true, example: 'John' })
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty({ required: true, example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @ApiProperty({ required: true, example: 'Str0ngP@ssw0rd!' })
  @IsNotEmpty()
  @IsString()
  // @IsStrongPassword()
  readonly password: string;

  @ApiProperty({ required: true, example: 'device-uuid-1234' })
  @IsOptional()
  @IsString()
  readonly device_id: string;
}
export class ResendCodeDto {
  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
export class AuthConfirmSignUpDto {
  @ApiProperty({ required: true, example: 123456 })
  @IsNotEmpty()
  @IsNumber()
  readonly code: number;

  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}

export class AuthConfirmPhoneDto {
  @ApiProperty({ required: true, example: '+15551234567' })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[+]?[0-9]{10,15}$/) // Ensures the phone number is valid with optional '+'
  readonly phone: string;

  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
export class AuthConfirmOtpDto {
  @ApiProperty({ required: true, example: 123456 })
  @IsNotEmpty()
  @IsNumber()
  readonly code: number;

  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}

export class UpdatePasswordDto {
  @ApiProperty({ required: true, example: 'OldP@ssw0rd!' })
  @IsNotEmpty()
  @IsString()
  readonly currentPassword: string;

  @ApiProperty({ required: true, example: 'NewStr0ngP@ss!' })
  @IsNotEmpty()
  @IsString()
  readonly newPassword: string;
}

export class ResetPasswordDto {
  @ApiProperty({ required: true, example: 'NewStr0ngP@ss!' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty({ required: true, example: 'NewStr0ngP@ss!' })
  @IsNotEmpty()
  @IsString()
  readonly confirmPassword: string;
}

export class SetPasswordDto {
  @ApiProperty({ required: true, example: 'NewStr0ngP@ss!' })
  @IsNotEmpty()
  @IsString()
  // @IsStrongPassword()
  readonly password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ required: true, example: 'user@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
export class ValidatePasswordDto {
  @ApiProperty({ required: true, example: 'Str0ngP@ssw0rd!' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Your password validation logic goes here
          // Example validation criteria: min length 8, at least one uppercase letter, one lowercase letter, one number, and one special character
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/;
          return passwordRegex.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a strong password (min length 8, at least one uppercase letter, one lowercase letter, one number, and one special character)`;
        },
      },
    });
  };
}
