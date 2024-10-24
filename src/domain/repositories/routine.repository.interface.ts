import { RoutineModel,FetchRoutineModel,UpdateRoutineModel } from '../models/Routine';
export interface IRoutine {
createRoutine(routineModel:RoutineModel): Promise<FetchRoutineModel>;
getRoutine(id:number) : Promise<FetchRoutineModel>;
getRoutines() : Promise<FetchRoutineModel[]>;
updateRoutine(id: number, updateRoutineModel:UpdateRoutineModel): Promise<FetchRoutineModel>;
deleteRoutine(id:number) : Promise<void>;
}
