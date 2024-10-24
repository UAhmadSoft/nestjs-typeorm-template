import { ExerciseUseCases } from '../../../usecases/exercise/exercise.usecases';
import { CreateExerciseDto, UpdateExerciseDto } from './exercise.dto';
export declare class ExerciseController {
    private readonly exerciseUseCases;
    constructor(exerciseUseCases: ExerciseUseCases);
    createExercise(exercise: CreateExerciseDto): Promise<import("../../../domain/models/exercise").FetchExerciseModel>;
    getExercise(id: number): Promise<{
        data: import("../../../domain/models/exercise").FetchExerciseModel;
    }>;
    getExercises(): Promise<import("../../../domain/models/exercise").FetchExerciseModel[]>;
    updateExercise(id: number, exercise: UpdateExerciseDto): Promise<import("../../../domain/models/exercise").FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
