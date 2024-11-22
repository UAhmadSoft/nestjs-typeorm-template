import { RoutineExercises } from 'src/infrastructure/entities/routine-exercise.entity';
export declare class RoutineModel {
    title: string;
    time: number;
    play_sound: boolean;
    time_delay: number;
    exercises: number[];
    user?: number;
}
export declare class FetchRoutineModel {
    id: number;
    title: string;
    time: number;
    play_sound: boolean;
    time_delay: number;
    routineExercises: RoutineExercises[];
    user: number;
}
export declare class UpdateRoutineModel {
    title?: string;
    time?: number;
    play_sound?: boolean;
    time_delay?: number;
    exercises?: number[];
    user?: number;
}
