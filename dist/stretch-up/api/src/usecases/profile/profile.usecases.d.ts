import { ProfileModel, UpdateProfileModel } from '../../domain/models/profile';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';
export declare class ProfileUseCases {
    private readonly profileRepository;
    constructor(profileRepository: ProfileRepository);
    createProfile(profileModel: ProfileModel): Promise<import("../../domain/models/profile").FetchProfileModel>;
    getProfile(id: number): Promise<{
        data: import("../../domain/models/profile").FetchProfileModel;
    }>;
    getProfiles(): Promise<import("../../domain/models/profile").FetchProfileModel[]>;
    updateProfile(id: number, profileUpdateModel: UpdateProfileModel): Promise<import("../../domain/models/profile").FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
