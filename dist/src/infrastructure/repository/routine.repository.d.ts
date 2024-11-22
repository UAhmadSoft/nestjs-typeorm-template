import { Repository } from 'typeorm';
import { RoutineModel, FetchRoutineModel, UpdateRoutineModel } from '../../domain/models/routine';
import { IRoutine } from '../../domain/repositories/routine.repository.interface';
import { Routines } from '../entities/routine.entity';
import { RoutineExercises } from '../entities/routine-exercise.entity';
import { UserExercises } from '../entities/userexercise.entity';
export declare class RoutineRepository implements IRoutine {
    private routineRepository;
    private readonly routineExercisesRepository;
    private readonly userExercisesRepository;
    constructor(routineRepository: Repository<Routines>, routineExercisesRepository: Repository<RoutineExercises>, userExercisesRepository: Repository<UserExercises>);
    getRoutinesCount(): Promise<number>;
    getDefaultRoutine(): Promise<FetchRoutineModel[]>;
    getRoutinesCountPerCategory(): Promise<any>;
    getRoutinesCountPerArea(): Promise<any>;
    createRoutine(routineModel: RoutineModel): Promise<FetchRoutineModel>;
    getRecommendedRoutines(userId: number): Promise<FetchRoutineModel[]>;
    getRoutine(id: number): Promise<FetchRoutineModel>;
    getRoutines(): Promise<FetchRoutineModel[]>;
    updateRoutine(id: number, updateRoutineModel: UpdateRoutineModel): Promise<FetchRoutineModel>;
    deleteRoutine(id: number): Promise<void>;
}
