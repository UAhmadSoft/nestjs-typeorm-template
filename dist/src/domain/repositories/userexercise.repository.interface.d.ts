import { UserExerciseModel, FetchUserExerciseModel, UpdateUserExerciseModel } from '../models/UserExercise';
export interface IUserExercise {
    createUserExercise(userExerciseModel: UserExerciseModel): Promise<FetchUserExerciseModel>;
    getUserExercise(id: number): Promise<FetchUserExerciseModel>;
    getUserExercises(): Promise<FetchUserExerciseModel[]>;
    updateUserExercise(id: number, updateUserExerciseModel: UpdateUserExerciseModel): Promise<FetchUserExerciseModel>;
    deleteUserExercise(id: number): Promise<void>;
}
