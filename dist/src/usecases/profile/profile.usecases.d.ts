import { ProfileModel, UpdateProfileModel } from '../../domain/models/profile.model';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
export declare class ProfileUseCases {
    private readonly profileRepository;
    constructor(profileRepository: ProfileRepository);
    createProfile(profileModel: ProfileModel): Promise<import("../../domain/models/profile.model").FetchProfileModel>;
    getProfile(id: number): Promise<{
        data: import("../../domain/models/profile.model").FetchProfileModel;
    }>;
    getProfiles(): Promise<import("../../domain/models/profile.model").FetchProfileModel[]>;
    updateProfile(id: number, profileUpdateModel: UpdateProfileModel): Promise<import("../../domain/models/profile.model").FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
