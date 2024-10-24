import { ProfileUseCases } from '../../../usecases/profile/profile.usecases';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';
export declare class ProfileController {
    private readonly profileUseCases;
    constructor(profileUseCases: ProfileUseCases);
    createProfile(profile: CreateProfileDto): Promise<import("../../../domain/models/profile").FetchProfileModel>;
    getProfile(id: number): Promise<{
        data: import("../../../domain/models/profile").FetchProfileModel;
    }>;
    getProfiles(): Promise<import("../../../domain/models/profile").FetchProfileModel[]>;
    updateProfile(id: number, profile: UpdateProfileDto): Promise<import("../../../domain/models/profile").FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
