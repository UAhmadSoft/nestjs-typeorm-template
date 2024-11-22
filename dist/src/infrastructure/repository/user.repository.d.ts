import { Repository } from 'typeorm';
import { UserModel, FetchUserModel, UpdateUserModel } from '../../domain/models/user';
import { IUser } from '../../domain/repositories/user.repository.interface';
import { Users } from '../entities/user.entity';
export declare class UserRepository implements IUser {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    createUser(userModel: UserModel): Promise<FetchUserModel>;
    getUser(id: number): Promise<FetchUserModel>;
    getUsersCount(): Promise<number>;
    getUsers(queryParams: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<{
        total_count: number;
        users: FetchUserModel[];
    }>;
    updateUser(id: number, updateUserModel: UpdateUserModel): Promise<FetchUserModel>;
    deleteUser(id: number): Promise<void>;
    getActiveUserByEmail(email: string): Promise<UserModel>;
    getUserByEmail(email: string): Promise<FetchUserModel>;
    getUserByCode(code: number): Promise<FetchUserModel>;
}
