import { UserExerciseUseCases } from '../../../usecases/userexercise/userexercise.usecases';
import { CreateUserExerciseDto, UpdateUserExerciseDto } from './userexercise.dto';
export declare class UserExerciseController {
    private readonly userExerciseUseCases;
    constructor(userExerciseUseCases: UserExerciseUseCases);
    createUserExercise(userExercise: CreateUserExerciseDto, req: any): Promise<import("../../../domain/models/userexercise").FetchUserExerciseModel>;
    getActiveStreak(req: any): Promise<{
        percentage_duration: number;
        active_streak: number;
        days_completed: number;
        longest_streak: number;
        todays_duration: number;
    }>;
    getDailyExercisesSummary(req: any): Promise<{
        date: Date;
        totalDuration: number;
    }[]>;
    getUserExercise(id: number): Promise<{
        data: import("../../../domain/models/userexercise").FetchUserExerciseModel;
    }>;
    getUserExercises(): Promise<import("../../../domain/models/userexercise").FetchUserExerciseModel[]>;
    updateUserExercise(id: number, userExercise: UpdateUserExerciseDto): Promise<import("../../../domain/models/userexercise").FetchUserExerciseModel>;
    deleteUserExercise(id: number): Promise<void>;
}
