import { Exercises } from './exercise.entity';
export declare class Routines {
    id: number;
    title: string;
    time: number;
    play_soung: boolean;
    time_delay: number;
    exercises: Exercises[];
    user: number;
    created_on: Date;
    updated_on: Date;
}
