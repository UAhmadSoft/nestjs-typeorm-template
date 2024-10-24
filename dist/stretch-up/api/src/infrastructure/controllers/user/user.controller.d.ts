import { UserUseCases } from '../../../usecases/user/user.usecases';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UserController {
    private readonly userUseCases;
    constructor(userUseCases: UserUseCases);
    createUser(user: CreateUserDto): Promise<import("../../../domain/models/user").FetchUserModel>;
    getUser(id: number): Promise<{
        data: import("../../../domain/models/user").FetchUserModel;
    }>;
    getUsers(): Promise<import("../../../domain/models/user").FetchUserModel[]>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("../../../domain/models/user").FetchUserModel>;
    deleteUser(id: number): Promise<void>;
}
