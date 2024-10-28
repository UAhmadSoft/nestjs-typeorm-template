import { UserPreferenceUseCases } from '../../../usecases/userpreference/userpreference.usecases';
import { CreateUserPreferenceDto, UpdateUserPreferenceDto } from './userpreference.dto';
export declare class UserPreferenceController {
    private readonly userPreferenceUseCases;
    constructor(userPreferenceUseCases: UserPreferenceUseCases);
    createUserPreference(userPreference: CreateUserPreferenceDto): Promise<import("../../../domain/models/userpreference").FetchUserPreferenceModel>;
    getUserPreference(id: number): Promise<{
        data: import("../../../domain/models/userpreference").FetchUserPreferenceModel;
    }>;
    getUserPreferences(): Promise<import("../../../domain/models/userpreference").FetchUserPreferenceModel[]>;
    updateUserPreference(id: number, userPreference: UpdateUserPreferenceDto): Promise<import("../../../domain/models/userpreference").FetchUserPreferenceModel>;
    deleteUserPreference(id: number): Promise<void>;
}
