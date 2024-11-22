import { RoutineModel, UpdateRoutineModel } from '../../domain/models/routine';
import { RoutineRepository } from '../../infrastructure/repository/routine.repository';
export declare class RoutineUseCases {
    private readonly routineRepository;
    constructor(routineRepository: RoutineRepository);
    createRoutine(routineModel: RoutineModel): Promise<any>;
    getRoutine(id: number): Promise<{
        data: any;
    }>;
    getRoutines(): Promise<any>;
    updateRoutine(id: number, routineUpdateModel: UpdateRoutineModel): Promise<any>;
    deleteRoutine(id: number): Promise<any>;
}
