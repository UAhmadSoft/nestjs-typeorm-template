import { ProfileUseCases } from '../../../usecases/profile/profile.usecases';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';
export declare class ProfileController {
    private readonly profileUseCases;
    constructor(profileUseCases: ProfileUseCases);
    createProfile(profile: CreateProfileDto): Promise<import("../../../domain/models/profile.model").FetchProfileModel>;
    getProfile(id: number): Promise<{
        data: import("../../../domain/models/profile.model").FetchProfileModel;
    }>;
    getProfiles(): Promise<import("../../../domain/models/profile.model").FetchProfileModel[]>;
    updateProfile(id: number, profile: UpdateProfileDto): Promise<import("../../../domain/models/profile.model").FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
