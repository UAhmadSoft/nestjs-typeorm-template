import { RoutineModel, UpdateRoutineModel } from '../../domain/models/routine';
import { RoutineRepository } from '../../infrastructure/repository/routine.repository';
export declare class RoutineUseCases {
    private readonly routineRepository;
    constructor(routineRepository: RoutineRepository);
    createRoutine(routineModel: RoutineModel): Promise<import("../../domain/models/routine").FetchRoutineModel>;
    getRoutine(id: number): Promise<{
        data: import("../../domain/models/routine").FetchRoutineModel;
    }>;
    getRoutines(): Promise<import("../../domain/models/routine").FetchRoutineModel[]>;
    updateRoutine(id: number, routineUpdateModel: UpdateRoutineModel): Promise<import("../../domain/models/routine").FetchRoutineModel>;
    deleteRoutine(id: number): Promise<void>;
}
