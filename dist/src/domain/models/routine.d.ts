import { Exercises } from 'src/infrastructure/entities/exercise.entity';
export declare class RoutineModel {
    title: string;
    time: number;
    play_soung: boolean;
    time_delay: number;
    exercises: number[];
    user?: number;
}
export declare class FetchRoutineModel {
    id: number;
    title: string;
    time: number;
    play_soung: boolean;
    time_delay: number;
    exercises: Exercises[] | number[];
    user: number;
}
export declare class UpdateRoutineModel {
    title?: string;
    time?: number;
    play_soung?: boolean;
    time_delay?: number;
    exercises?: number[];
    user?: number;
}
