import { UserPreferenceModel, FetchUserPreferenceModel, UpdateUserPreferenceModel } from '../models/UserPreference';
export interface IUserPreference {
    createUserPreference(userPreferenceModel: UserPreferenceModel): Promise<FetchUserPreferenceModel>;
    getUserPreference(id: number): Promise<FetchUserPreferenceModel>;
    getUserPreferences(): Promise<FetchUserPreferenceModel[]>;
    updateUserPreference(id: number, updateUserPreferenceModel: UpdateUserPreferenceModel): Promise<FetchUserPreferenceModel>;
    deleteUserPreference(id: number): Promise<void>;
}
