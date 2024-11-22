import { Repository } from 'typeorm';
import { ExerciseModel, FetchExerciseModel, UpdateExerciseModel } from '../../domain/models/exercise';
import { IExercise } from '../../domain/repositories/exercise.repository.interface';
import { Exercises } from '../entities/exercise.entity';
import { ExerciseCategories } from '../entities/exercise-category.entity';
export declare class ExerciseRepository implements IExercise {
    private exerciseRepository;
    private readonly exerciseCategoriesRepository;
    constructor(exerciseRepository: Repository<Exercises>, exerciseCategoriesRepository: Repository<ExerciseCategories>);
    getExercisesCount(): Promise<number>;
    getExercisesCountPerCategory(): Promise<any>;
    getTopExercisesByDurationThisMonth(): Promise<any>;
    getExercisesCountPerArea(): Promise<any>;
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
