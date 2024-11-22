import { AreaEnum } from 'src/infrastructure/entities/exercise.entity';
export declare class CreateExerciseDto {
    title: string;
    instructions: string;
    benefits: string;
    caution: string;
    duration: number;
    area: AreaEnum;
    categories: number[];
}
export declare class UpdateExerciseDto {
    title?: string;
    instructions?: string;
    duration?: number;
    benefits?: string;
    caution?: string;
    image?: string;
    thumbnail?: string;
    area?: AreaEnum;
    categories?: number[];
}
