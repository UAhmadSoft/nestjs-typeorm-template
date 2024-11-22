import { RoutineExercises } from './routine-exercise.entity';
export declare class Routines {
    id: number;
    title: string;
    time: number;
    play_sound: boolean;
    time_delay: number;
    routineExercises: RoutineExercises[];
    user: number;
    created_on: Date;
    updated_on: Date;
}
