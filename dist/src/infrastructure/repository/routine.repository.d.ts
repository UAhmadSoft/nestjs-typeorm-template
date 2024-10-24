import { Repository } from 'typeorm';
import { RoutineModel, FetchRoutineModel, UpdateRoutineModel } from '../../domain/models/routine';
import { IRoutine } from '../../domain/repositories/routine.repository.interface';
import { Routines } from '../entities/routine.entity';
export declare class RoutineRepository implements IRoutine {
    private routineRepository;
    constructor(routineRepository: Repository<Routines>);
    createRoutine(routineModel: RoutineModel): Promise<FetchRoutineModel>;
    getRoutine(id: number): Promise<FetchRoutineModel>;
    getRoutines(): Promise<FetchRoutineModel[]>;
    updateRoutine(id: number, updateRoutineModel: UpdateRoutineModel): Promise<FetchRoutineModel>;
    deleteRoutine(id: number): Promise<void>;
}
