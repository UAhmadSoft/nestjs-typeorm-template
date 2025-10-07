import { JwtTokenService } from 'src/infrastructure/services/jwt/jwt.service';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { ProfileUseCases } from '../profile/profile.usecases';
export declare class LoginUseCases {
    private readonly jwtTokenService;
    private readonly jwtConfig;
    private readonly userRepository;
    private readonly profileUsecases;
    private readonly bcryptService;
    constructor(jwtTokenService: JwtTokenService, jwtConfig: EnvironmentConfigService, userRepository: UserRepository, profileUsecases: ProfileUseCases, bcryptService: BcryptService);
    getJwtToken(email: string): Promise<string>;
    getCookieForAuthCheck(): string;
    validateUserForLocalStragtegy(email: string, pass: string): Promise<{
        email: string;
        signup_otp?: number;
        signup_otp_expiry?: Date;
        forget_email_otp?: number;
        forget_email_otp_expiry?: Date;
        is_social_login?: boolean;
        is_email_verified?: boolean;
        upcoming_email?: string;
        upcoming_email_otp?: number;
        upcoming_email_otp_expiry?: Date;
        allow_notifications?: boolean;
        is_active?: boolean;
        is_banned?: boolean;
        role?: string;
        device_id?: string;
    }>;
    validateEmailForLocalStragtegy(email: string): Promise<import("../../domain/models/user.model").UserModel>;
    validateUserForJWTStragtegy(email: string): Promise<import("../../domain/models/user.model").UserModel>;
}
