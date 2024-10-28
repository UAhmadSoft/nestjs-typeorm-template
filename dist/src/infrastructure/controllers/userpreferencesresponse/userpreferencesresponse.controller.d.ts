import { UserPreferencesResponseUseCases } from '../../../usecases/userpreferencesresponse/userpreferencesresponse.usecases';
import { CreateUserPreferencesResponseDto, UpdateUserPreferencesResponseDto } from './userpreferencesresponse.dto';
export declare class UserPreferencesResponseController {
    private readonly userPreferencesResponseUseCases;
    constructor(userPreferencesResponseUseCases: UserPreferencesResponseUseCases);
    createUserPreferencesResponse(userPreferencesResponse: CreateUserPreferencesResponseDto): Promise<import("../../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel>;
    getUserPreferencesResponse(id: number): Promise<{
        data: import("../../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel;
    }>;
    getUserPreferencesResponses(): Promise<import("../../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel[]>;
    updateUserPreferencesResponse(id: number, userPreferencesResponse: UpdateUserPreferencesResponseDto): Promise<import("../../../domain/models/userpreferencesresponse").FetchUserPreferencesResponseModel>;
    deleteUserPreferencesResponse(id: number): Promise<void>;
}
