import { ExerciseUseCases } from '../../../usecases/exercise/exercise.usecases';
import { CreateExerciseDto, UpdateExerciseDto } from './exercise.dto';
export declare class ExerciseController {
    private readonly exerciseUseCases;
    constructor(exerciseUseCases: ExerciseUseCases);
    createExercise(exercise: CreateExerciseDto, files: {
        image?: any[];
        thumbnail?: any[];
    }): Promise<import("../../../domain/models/exercise").FetchExerciseModel>;
    getExercise(id: number): Promise<{
        data: import("../../../domain/models/exercise").FetchExerciseModel;
    }>;
    getExercises(query: any): Promise<{
        total: number;
        results: number;
        exercises: import("../../../domain/models/exercise").FetchExerciseModel[];
    }>;
    updateExercise(id: number, exercise: UpdateExerciseDto, files: {
        image?: any[];
        thumbnail?: any[];
    }): Promise<import("../../../domain/models/exercise").FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
