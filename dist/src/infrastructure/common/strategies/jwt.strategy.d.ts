import { Strategy } from 'passport-jwt';
import { EnvironmentConfigService } from '../../../infrastructure/config/environment-config/environment-config.service';
import { LoginUseCases } from 'src/usecases/auth/login.usecases';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly loginUsecase;
    private readonly configService;
    constructor(loginUsecase: LoginUseCases, configService: EnvironmentConfigService);
    validate(payload: any): Promise<import("../../../domain/models/user.model").UserModel>;
}
export {};
