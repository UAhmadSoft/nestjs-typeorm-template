import { ExerciseModel, UpdateExerciseModel } from '../../domain/models/exercise';
import { ExerciseRepository } from '../../infrastructure/repository/exercise.repository';
export declare class ExerciseUseCases {
    private readonly exerciseRepository;
    constructor(exerciseRepository: ExerciseRepository);
    createExercise(exerciseModel: ExerciseModel): Promise<any>;
    getExercise(id: number): Promise<{
        data: any;
    }>;
    getExercises(query?: {}): Promise<any>;
    updateExercise(id: number, exerciseUpdateModel: UpdateExerciseModel): Promise<any>;
    deleteExercise(id: number): Promise<any>;
}
