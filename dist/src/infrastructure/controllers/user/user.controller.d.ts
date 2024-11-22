import { UserUseCases } from '../../../usecases/user/user.usecases';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { LoginUseCases } from 'src/usecases/auth/login.usecases';
export declare class UserController {
    private readonly userUseCases;
    private readonly loginUsecaseProxy;
    constructor(userUseCases: UserUseCases, loginUsecaseProxy: LoginUseCases);
    createUser(user: CreateUserDto): Promise<import("../../../domain/models/user").FetchUserModel>;
    getMe(req: any): Promise<{
        user: import("../../../domain/models/user").UserModel;
        authentication: string;
    }>;
    getUser(id: number): Promise<import("../../../domain/models/user").FetchUserModel>;
    getUsers(queryParams: any): Promise<{
        total_count: number;
        users: import("../../../domain/models/user").FetchUserModel[];
    }>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("../../../domain/models/user").FetchUserModel>;
    deleteUser(id: number): Promise<void>;
}
