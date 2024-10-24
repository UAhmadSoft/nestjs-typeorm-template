import { Repository } from 'typeorm';
import { UserModel, FetchUserModel, UpdateUserModel } from '../../domain/models/user';
import { IUser } from '../../domain/repositories/user.repository.interface';
import { Users } from '../entities/user.entity';
export declare class UserRepository implements IUser {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    createUser(userModel: UserModel): Promise<FetchUserModel>;
    getUser(id: number): Promise<FetchUserModel>;
    getUsers(): Promise<FetchUserModel[]>;
    updateUser(id: number, updateUserModel: UpdateUserModel): Promise<FetchUserModel>;
    deleteUser(id: number): Promise<void>;
}
