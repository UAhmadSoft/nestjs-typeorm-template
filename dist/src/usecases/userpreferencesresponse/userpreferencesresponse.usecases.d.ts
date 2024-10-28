import { UserPreferencesResponseModel, UpdateUserPreferencesResponseModel } from '../../domain/models/userpreferencesresponse';
import { UserPreferencesResponseRepository } from '../../infrastructure/repository/userpreferencesresponse.repository';
export declare class UserPreferencesResponseUseCases {
    private readonly userPreferencesResponseRepository;
    constructor(userPreferencesResponseRepository: UserPreferencesResponseRepository);
    createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel): Promise<import("../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel>;
    getUserPreferencesResponse(id: number): Promise<{
        data: import("../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel;
    }>;
    getUserPreferencesResponses(): Promise<import("../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel[]>;
    updateUserPreferencesResponse(id: number, userPreferencesResponseUpdateModel: UpdateUserPreferencesResponseModel): Promise<import("../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel>;
    deleteUserPreferencesResponse(id: number): Promise<void>;
}
