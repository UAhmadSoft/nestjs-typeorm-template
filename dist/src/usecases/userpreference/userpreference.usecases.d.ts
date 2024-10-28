import { UserPreferenceModel, UpdateUserPreferenceModel } from '../../domain/models/userpreference';
import { UserPreferenceRepository } from '../../infrastructure/repository/userpreference.repository';
export declare class UserPreferenceUseCases {
    private readonly userPreferenceRepository;
    constructor(userPreferenceRepository: UserPreferenceRepository);
    createUserPreference(userPreferenceModel: UserPreferenceModel): Promise<import("../../domain/models/userpreference").FetchUserPreferenceModel>;
    getUserPreference(id: number): Promise<{
        data: import("../../domain/models/userpreference").FetchUserPreferenceModel;
    }>;
    getUserPreferences(): Promise<import("../../domain/models/userpreference").FetchUserPreferenceModel[]>;
    updateUserPreference(id: number, userPreferenceUpdateModel: UpdateUserPreferenceModel): Promise<import("../../domain/models/userpreference").FetchUserPreferenceModel>;
    deleteUserPreference(id: number): Promise<void>;
}
