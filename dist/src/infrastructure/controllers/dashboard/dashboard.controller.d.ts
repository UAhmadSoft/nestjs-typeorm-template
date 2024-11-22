import { DashboardUseCases } from 'src/usecases/dashboard/dashboard.usecases';
export declare class DashboardController {
    private readonly dashboardUseCases;
    constructor(dashboardUseCases: DashboardUseCases);
    getStats(): Promise<{
        usersCount: number;
        exercisesCount: number;
        routinesCount: number;
        supportCount: number;
    }>;
    getGraphsData(): Promise<{
        exercisesCountPerCategory: any;
        exercisesCountPerArea: any;
        routinesCountPerCategory: any;
        routinesCountPerArea: any;
    }>;
    getTopExercises(): Promise<any>;
    getDefaultRoutine(): Promise<import("../../../domain/models/routine").FetchRoutineModel[]>;
    getRecommendedRoutines(req: any): Promise<import("../../../domain/models/routine").FetchRoutineModel[]>;
    getAreas(): Promise<string[]>;
}
