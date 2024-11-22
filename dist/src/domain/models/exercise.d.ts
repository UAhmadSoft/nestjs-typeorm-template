import { Categories } from 'src/infrastructure/entities/category.entity';
import { AreaEnum } from 'src/infrastructure/entities/exercise.entity';
export declare class ExerciseModel {
    title: string;
    instructions: string;
    benefits: string;
    caution: string;
    image: string;
    thumbnail: string;
    area: AreaEnum;
    duration: number;
    categories: number[];
}
export declare class FetchExerciseModel {
    id: number;
    title: string;
    instructions: string;
    benefits: string;
    caution: string;
    image: string;
    thumbnail: string;
    area: AreaEnum;
    duration: number;
    categories?: Categories[];
}
export declare class UpdateExerciseModel {
    title?: string;
    instructions?: string;
    benefits?: string;
    caution?: string;
    image?: string;
    thumbnail?: string;
    area?: AreaEnum;
    duration?: number;
    categories?: number[];
}
