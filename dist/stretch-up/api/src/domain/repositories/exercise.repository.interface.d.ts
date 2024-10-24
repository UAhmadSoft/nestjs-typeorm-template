import { ExerciseModel, FetchExerciseModel, UpdateExerciseModel } from '../models/Exercise';
export interface IExercise {
    createExercise(exerciseModel: ExerciseModel): Promise<FetchExerciseModel>;
    getExercise(id: number): Promise<FetchExerciseModel>;
    getExercises(): Promise<FetchExerciseModel[]>;
    updateExercise(id: number, updateExerciseModel: UpdateExerciseModel): Promise<FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
