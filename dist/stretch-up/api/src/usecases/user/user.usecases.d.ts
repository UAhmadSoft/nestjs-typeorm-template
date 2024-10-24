import { UserModel, UpdateUserModel } from '../../domain/models/user';
import { UserRepository } from '../../infrastructure/repository/user.repository';
export declare class UserUseCases {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(userModel: UserModel): Promise<import("../../domain/models/user").FetchUserModel>;
    getUser(id: number): Promise<{
        data: import("../../domain/models/user").FetchUserModel;
    }>;
    getUsers(): Promise<import("../../domain/models/user").FetchUserModel[]>;
    updateUser(id: number, userUpdateModel: UpdateUserModel): Promise<import("../../domain/models/user").FetchUserModel>;
    deleteUser(id: number): Promise<void>;
}
