import { Repository } from 'typeorm';
import { UserPreferenceModel, FetchUserPreferenceModel, UpdateUserPreferenceModel } from '../../domain/models/userpreference';
import { IUserPreference } from '../../domain/repositories/userpreference.repository.interface';
import { UserPreferences } from '../entities/userpreference.entity';
export declare class UserPreferenceRepository implements IUserPreference {
    private userPreferenceRepository;
    constructor(userPreferenceRepository: Repository<UserPreferences>);
    createUserPreference(userPreferenceModel: UserPreferenceModel): Promise<FetchUserPreferenceModel>;
    getUserPreference(id: number): Promise<FetchUserPreferenceModel>;
    getUserPreferences(): Promise<FetchUserPreferenceModel[]>;
    updateUserPreference(id: number, updateUserPreferenceModel: UpdateUserPreferenceModel): Promise<FetchUserPreferenceModel>;
    deleteUserPreference(id: number): Promise<void>;
}
