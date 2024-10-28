export declare class Users {
    id: number;
    email: string;
    role: string;
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
    created_on: Date;
    updated_on: Date;
}
