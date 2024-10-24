import { RoutineUseCases } from '../../../usecases/routine/routine.usecases';
import { CreateRoutineDto, UpdateRoutineDto } from './routine.dto';
export declare class RoutineController {
    private readonly routineUseCases;
    constructor(routineUseCases: RoutineUseCases);
    createRoutine(routine: CreateRoutineDto): Promise<import("../../../domain/models/routine").FetchRoutineModel>;
    getRoutine(id: number): Promise<{
        data: import("../../../domain/models/routine").FetchRoutineModel;
    }>;
    getRoutines(): Promise<import("../../../domain/models/routine").FetchRoutineModel[]>;
    updateRoutine(id: number, routine: UpdateRoutineDto): Promise<import("../../../domain/models/routine").FetchRoutineModel>;
    deleteRoutine(id: number): Promise<void>;
}
