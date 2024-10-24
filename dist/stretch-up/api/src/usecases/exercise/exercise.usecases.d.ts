import { ExerciseModel, UpdateExerciseModel } from '../../domain/models/exercise';
import { ExerciseRepository } from '../../infrastructure/repository/exercise.repository';
export declare class ExerciseUseCases {
    private readonly exerciseRepository;
    constructor(exerciseRepository: ExerciseRepository);
    createExercise(exerciseModel: ExerciseModel): Promise<import("../../domain/models/exercise").FetchExerciseModel>;
    getExercise(id: number): Promise<{
        data: import("../../domain/models/exercise").FetchExerciseModel;
    }>;
    getExercises(): Promise<import("../../domain/models/exercise").FetchExerciseModel[]>;
    updateExercise(id: number, exerciseUpdateModel: UpdateExerciseModel): Promise<import("../../domain/models/exercise").FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
