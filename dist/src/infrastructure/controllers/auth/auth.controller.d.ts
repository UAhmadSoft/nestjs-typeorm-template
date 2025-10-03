import { ProfileUseCases } from 'src/usecases/profile/profile.usecases';
import { BcryptService } from './../../services/bcrypt/bcrypt.service';
import { AuthConfirmSignUpDto, AuthGoogleDto, AuthLoginDto, AuthSignUpDto, ForgotPasswordDto, ResendCodeDto, ResetPasswordDto, SetPasswordDto, UpdatePasswordDto } from './dtos/auth.dto';
import { LoginUseCases } from '../../../usecases/auth/login.usecases';
import { UserUseCases } from 'src/usecases/user/user.usecases';
export declare class AuthController {
    private readonly loginUsecaseProxy;
    private readonly userUseCases;
    private readonly profileUseCases;
    private readonly bcryptService;
    constructor(loginUsecaseProxy: LoginUseCases, userUseCases: UserUseCases, profileUseCases: ProfileUseCases, bcryptService: BcryptService);
    login(auth: AuthLoginDto, req: any, res: any, next: any): Promise<void>;
    googleLogin(auth: AuthGoogleDto, res: any): Promise<any>;
    SignUp(auth: AuthSignUpDto, req: any, res: any, next: any): Promise<void>;
    ConfirmUserSignUp(user: AuthConfirmSignUpDto, req: any, res: any, next: any): Promise<void>;
    ResendCode(auth: ResendCodeDto, req: any, res: any, next: any): Promise<void>;
    forgotPassword(forgotDto: ForgotPasswordDto, req: any, res: any, next: any): Promise<void>;
    setPassword(code: number, body: SetPasswordDto, req: any, res: any, next: any): Promise<void>;
    resetPassword(body: ResetPasswordDto, code: number, req: any, res: any, next: any): Promise<void>;
    updatePassword(user: UpdatePasswordDto, req: any, res: any, next: any): Promise<void>;
    randomIntFromInterval(min: any, max: any): number;
}
