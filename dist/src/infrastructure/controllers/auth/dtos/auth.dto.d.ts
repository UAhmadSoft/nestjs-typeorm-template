import { ValidationOptions } from 'class-validator';
export declare class AuthLoginDto {
    readonly email: string;
    readonly password: string;
}
export declare class AuthGoogleDto {
    readonly email: string;
    readonly is_social_login: boolean;
    readonly device_id: string;
}
export declare class AuthSignUpDto {
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly password: string;
    readonly device_id: string;
}
export declare class ResendCodeDto {
    readonly email: string;
}
export declare class AuthConfirmSignUpDto {
    readonly code: number;
    readonly email: string;
}
export declare class AuthConfirmPhoneDto {
    readonly phone: string;
    readonly email: string;
}
export declare class AuthConfirmOtpDto {
    readonly code: number;
    readonly email: string;
}
export declare class UpdatePasswordDto {
    readonly currentPassword: string;
    readonly newPassword: string;
}
export declare class ResetPasswordDto {
    readonly password: string;
    readonly confirmPassword: string;
}
export declare class SetPasswordDto {
    readonly password: string;
}
export declare class ForgotPasswordDto {
    readonly email: string;
}
export declare class ValidatePasswordDto {
    readonly password: string;
}
export declare function IsStrongPassword(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
