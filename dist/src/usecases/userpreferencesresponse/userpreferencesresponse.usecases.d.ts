import { UserPreferencesResponseModel, UpdateUserPreferencesResponseModel } from '../../domain/models/userpreferencesresponse';
import { UserPreferencesResponseRepository } from '../../infrastructure/repository/userpreferencesresponse.repository';
export declare class UserPreferencesResponseUseCases {
    private readonly userPreferencesResponseRepository;
    constructor(userPreferencesResponseRepository: UserPreferencesResponseRepository);
    createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel): Promise<any>;
    getUserPreferencesResponse(id: number): Promise<{
        data: any;
    }>;
    getUserPreferencesResponses(): Promise<any>;
    updateUserPreferencesResponse(id: number, userPreferencesResponseUpdateModel: UpdateUserPreferencesResponseModel): Promise<any>;
    deleteUserPreferencesResponse(id: number): Promise<any>;
}
