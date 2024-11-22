import { Repository } from 'typeorm';
import { UserExerciseModel, FetchUserExerciseModel, UpdateUserExerciseModel } from '../../domain/models/userexercise';
import { IUserExercise } from '../../domain/repositories/userexercise.repository.interface';
import { UserExercises } from '../entities/userexercise.entity';
export declare class UserExerciseRepository implements IUserExercise {
    private userExerciseRepository;
    constructor(userExerciseRepository: Repository<UserExercises>);
    createUserExercise(userExerciseModel: UserExerciseModel): Promise<FetchUserExerciseModel>;
    getUserExercise(id: number): Promise<FetchUserExerciseModel>;
    getUserExercises(): Promise<FetchUserExerciseModel[]>;
    getPercentageIncreaseInDuration(userId: number): Promise<number>;
    getActiveStrikeOfUsualExercises(userId: number): Promise<number>;
    getLongestExerciseStreak(userId: number): Promise<number>;
    getTotalDurationForToday(userId: number): Promise<number>;
    daysComplted(userId: number): Promise<number>;
    groupDataByDate(data: {
        exercise_date: Date;
        title: string;
        total_duration: number;
    }[]): {};
    getDailyExercisesSummary(userId: number): Promise<{
        date: Date;
        totalDuration: number;
    }[]>;
    updateUserExercise(id: number, updateUserExerciseModel: UpdateUserExerciseModel): Promise<FetchUserExerciseModel>;
    deleteUserExercise(id: number): Promise<void>;
}
