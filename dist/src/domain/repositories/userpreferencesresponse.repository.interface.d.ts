import { UserPreferencesResponseModel, FetchUserPreferencesResponseModel, UpdateUserPreferencesResponseModel } from '../models/UserPreferencesResponse';
export interface IUserPreferencesResponse {
    createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel): Promise<FetchUserPreferencesResponseModel>;
    getUserPreferencesResponse(id: number): Promise<FetchUserPreferencesResponseModel>;
    getUserPreferencesResponses(): Promise<FetchUserPreferencesResponseModel[]>;
    updateUserPreferencesResponse(id: number, updateUserPreferencesResponseModel: UpdateUserPreferencesResponseModel): Promise<FetchUserPreferencesResponseModel>;
    deleteUserPreferencesResponse(id: number): Promise<void>;
}
