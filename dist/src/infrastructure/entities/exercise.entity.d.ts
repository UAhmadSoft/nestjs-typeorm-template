import { Categories } from './category.entity';
import { RoutineExercises } from './routine-exercise.entity';
export declare enum AreaEnum {
    Hips = "Hips",
    LowerBack = "Lower back",
    Hamstrings = "Hamstrings",
    Chest = "Chest",
    LowerBody = "Lower Body",
    Core = "Core",
    UpperBody = "Upper Body",
    Quadriceps = "Quadriceps",
    Neck = "Neck",
    Shoulders = "Shoulders"
}
export declare class Exercises {
    id: number;
    title: string;
    duration: number;
    instructions: string;
    benefits: string;
    caution: string;
    image: string;
    thumbnail: string;
    area: AreaEnum;
    categories?: Categories[];
    routineExercises: RoutineExercises[];
    created_on: Date;
    updated_on: Date;
}
