import { ProfileModel, FetchProfileModel, UpdateProfileModel } from '../models/Profile';
export interface IProfile {
    createProfile(profileModel: ProfileModel): Promise<FetchProfileModel>;
    getProfile(id: number): Promise<FetchProfileModel>;
    getProfiles(): Promise<FetchProfileModel[]>;
    updateProfile(id: number, updateProfileModel: UpdateProfileModel): Promise<FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
