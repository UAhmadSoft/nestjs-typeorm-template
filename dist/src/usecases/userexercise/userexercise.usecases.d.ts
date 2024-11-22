import { UserExerciseModel, UpdateUserExerciseModel } from '../../domain/models/userexercise';
import { UserExerciseRepository } from '../../infrastructure/repository/userexercise.repository';
export declare class UserExerciseUseCases {
    private readonly userExerciseRepository;
    constructor(userExerciseRepository: UserExerciseRepository);
    createUserExercise(userExerciseModel: UserExerciseModel): Promise<any>;
    getActiveStreak(userId: number): Promise<any>;
    getLongestExerciseStreak(userId: number): Promise<any>;
    daysComplted(userId: number): Promise<any>;
    getDailyExercisesSummary(userId: number): Promise<any>;
    getTotalDurationForToday(userId: number): Promise<any>;
    getPercentageIncreaseInDuration(userId: number): Promise<any>;
    getUserExercise(id: number): Promise<{
        data: any;
    }>;
    getUserExercises(): Promise<any>;
    updateUserExercise(id: number, userExerciseUpdateModel: UpdateUserExerciseModel): Promise<any>;
    deleteUserExercise(id: number): Promise<any>;
}
