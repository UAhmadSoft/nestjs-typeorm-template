import { Repository } from 'typeorm';
import { UserPreferencesResponseModel, FetchUserPreferencesResponseModel, UpdateUserPreferencesResponseModel } from '../../domain/models/userpreferencesresponse';
import { IUserPreferencesResponse } from '../../domain/repositories/userpreferencesresponse.repository.interface';
import { UserPreferencesResponses } from '../entities/userpreferencesresponse.entity';
export declare class UserPreferencesResponseRepository implements IUserPreferencesResponse {
    private userPreferencesResponseRepository;
    constructor(userPreferencesResponseRepository: Repository<UserPreferencesResponses>);
    createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel): Promise<FetchUserPreferencesResponseModel>;
    getUserPreferencesResponse(id: number): Promise<FetchUserPreferencesResponseModel>;
    getUserPreferencesResponses(): Promise<FetchUserPreferencesResponseModel[]>;
    updateUserPreferencesResponse(id: number, updateUserPreferencesResponseModel: UpdateUserPreferencesResponseModel): Promise<FetchUserPreferencesResponseModel>;
    deleteUserPreferencesResponse(id: number): Promise<void>;
}
