import { Categories } from './category.entity';
import { Exercises } from './exercise.entity';
export declare class ExerciseCategories {
    exerciseId: number;
    categoryId: number;
    exercises: Exercises[];
    categorys: Categories[];
}
