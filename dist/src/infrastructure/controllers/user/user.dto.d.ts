export declare class CreateUserDto {
    email: string;
    password: string;
    signup_otp: number;
    signup_otp_expiry: Date;
    forget_email_otp: number;
    forget_email_otp_expiry: Date;
    agent_rera: string;
    is_social_login: boolean;
    is_email_verified: boolean;
    upcoming_email: string;
    upcoming_email_otp: number;
    upcoming_email_otp_expiry: Date;
    allow_notifications: boolean;
    is_active: boolean;
    is_banned: boolean;
    device: string;
}
export declare class UpdateUserDto {
    email: string;
    password: string;
    signup_otp: number;
    signup_otp_expiry: Date;
    forget_email_otp: number;
    forget_email_otp_expiry: Date;
    agent_rera: string;
    is_social_login: boolean;
    is_email_verified: boolean;
    upcoming_email: string;
    upcoming_email_otp: number;
    upcoming_email_otp_expiry: Date;
    allow_notifications: boolean;
    is_active: boolean;
    is_banned: boolean;
    device: string;
}
