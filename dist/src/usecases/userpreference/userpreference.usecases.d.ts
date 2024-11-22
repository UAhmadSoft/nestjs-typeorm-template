import { UserPreferenceModel, UpdateUserPreferenceModel } from '../../domain/models/userpreference';
import { UserPreferenceRepository } from '../../infrastructure/repository/userpreference.repository';
export declare class UserPreferenceUseCases {
    private readonly userPreferenceRepository;
    constructor(userPreferenceRepository: UserPreferenceRepository);
    createUserPreference(userPreferenceModel: UserPreferenceModel): Promise<any>;
    getUserPreference(id: number): Promise<{
        data: any;
    }>;
    getUserPreferences(): Promise<any>;
    updateUserPreference(id: number, userPreferenceUpdateModel: UpdateUserPreferenceModel): Promise<any>;
    deleteUserPreference(id: number): Promise<any>;
}
