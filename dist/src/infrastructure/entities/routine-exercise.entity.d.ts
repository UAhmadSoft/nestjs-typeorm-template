import { Exercises } from './exercise.entity';
import { Routines } from './routine.entity';
export declare class RoutineExercises {
    exerciseId: number;
    routineId: number;
    exercise: Exercises;
    routine: Routines;
    duration: number;
}
