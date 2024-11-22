import { ExerciseModel, FetchExerciseModel, UpdateExerciseModel } from '../models/Exercise';
export interface IExercise {
    createExercise(exerciseModel: ExerciseModel): Promise<FetchExerciseModel>;
    getExercise(id: number): Promise<FetchExerciseModel>;
    getExercises(query: {
        page?: number;
        limit?: number;
        search?: string;
        categories?: string;
        sort?: string;
    }): Promise<{
        exercises: FetchExerciseModel[];
        total: number;
    }>;
    updateExercise(id: number, updateExerciseModel: UpdateExerciseModel): Promise<FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
