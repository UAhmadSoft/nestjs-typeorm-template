import { UserModel,FetchUserModel,UpdateUserModel } from '../models/User';
export interface IUser {
createUser(userModel:UserModel): Promise<FetchUserModel>;
getUser(id:number) : Promise<FetchUserModel>;
getUsers() : Promise<FetchUserModel[]>;
updateUser(id: number, updateUserModel:UpdateUserModel): Promise<FetchUserModel>;
deleteUser(id:number) : Promise<void>;
}
