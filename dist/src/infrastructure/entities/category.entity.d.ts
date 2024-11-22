import { Exercises } from './exercise.entity';
export declare class Categories {
    id: number;
    title: string;
    image: string;
    exercises?: Exercises[];
    created_on: Date;
    updated_on: Date;
}
