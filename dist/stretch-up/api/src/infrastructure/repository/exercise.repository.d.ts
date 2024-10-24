import { Repository } from 'typeorm';
import { ExerciseModel, FetchExerciseModel, UpdateExerciseModel } from '../../domain/models/exercise';
import { IExercise } from '../../domain/repositories/exercise.repository.interface';
import { Exercises } from '../entities/exercise.entity';
export declare class ExerciseRepository implements IExercise {
    private exerciseRepository;
    constructor(exerciseRepository: Repository<Exercises>);
    createExercise(exerciseModel: ExerciseModel): Promise<FetchExerciseModel>;
    getExercise(id: number): Promise<FetchExerciseModel>;
    getExercises(): Promise<FetchExerciseModel[]>;
    updateExercise(id: number, updateExerciseModel: UpdateExerciseModel): Promise<FetchExerciseModel>;
    deleteExercise(id: number): Promise<void>;
}
