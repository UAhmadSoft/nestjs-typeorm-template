import {
  UserModel,
  FetchUserModel,
  UpdateUserModel,
} from '../models/user.model';
export interface IUser {
  createUser(userModel: UserModel): Promise<FetchUserModel>;
  getUser(id: number): Promise<FetchUserModel>;
  getUsers(queryParams: any): Promise<{
    total_count: number;
    users: FetchUserModel[];
  }>;
  updateUser(
    id: number,
    updateUserModel: UpdateUserModel,
  ): Promise<FetchUserModel>;
  deleteUser(id: number): Promise<void>;
}
