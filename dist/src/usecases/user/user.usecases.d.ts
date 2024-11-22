import { UserModel, UpdateUserModel, FetchUserModel } from '../../domain/models/user';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { MailService } from 'src/infrastructure/services/emails/email.service';
export declare class UserUseCases {
    private readonly userRepository;
    private emailService;
    constructor(userRepository: UserRepository, emailService: MailService);
    randomIntFromInterval(min: any, max: any): number;
    getUserEmailByCode(code: number): Promise<any>;
    setUsersPassword(code: number, password: string): Promise<FetchUserModel>;
    sendSignupCode(user: FetchUserModel): Promise<FetchUserModel>;
    createUser(userModel: UserModel): Promise<FetchUserModel>;
    getMe(userEmail: string): Promise<UserModel>;
    getUserByEmail(email: string): Promise<FetchUserModel>;
    forgotPassword(email: string): Promise<string>;
    checkUser(userEmail: any): Promise<FetchUserModel>;
    createUserOnConfirmation(code: number, email: string): Promise<any>;
    resendCodeEmail(userEmail: string): Promise<FetchUserModel>;
    getUser(id: number): Promise<FetchUserModel>;
    getUsers(queryParams?: {}): Promise<{
        total_count: number;
        users: FetchUserModel[];
    }>;
    updateUser(id: number, userUpdateModel: UpdateUserModel): Promise<FetchUserModel>;
    deleteUser(id: number): Promise<void>;
}
