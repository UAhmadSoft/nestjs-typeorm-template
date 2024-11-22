import { Strategy } from 'passport-local';
import { LoginUseCases } from '../../../usecases/auth/login.usecases';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly loginUsecaseProxy;
    constructor(loginUsecaseProxy: LoginUseCases);
    validate(email: string, password: string): Promise<{
        user: {
            email: string;
            signup_otp?: number;
            signup_otp_expiry?: Date;
            forget_email_otp?: number;
            forget_email_otp_expiry?: Date;
            agent_rera?: string;
            is_social_login?: boolean;
            is_email_verified?: boolean;
            upcoming_email?: string;
            upcoming_email_otp?: number;
            upcoming_email_otp_expiry?: Date;
            allow_notifications?: boolean;
            is_active?: boolean;
            is_banned?: boolean;
            role?: string;
        };
    }>;
}
export {};
