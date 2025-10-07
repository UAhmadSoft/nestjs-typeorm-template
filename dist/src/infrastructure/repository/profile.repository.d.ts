import { Repository } from 'typeorm';
import { ProfileModel, FetchProfileModel, UpdateProfileModel } from '../../domain/models/profile.model';
import { IProfile } from '../../domain/repositories/profile.repository.interface';
import { Profiles } from '../entities/profile.entity';
export declare class ProfileRepository implements IProfile {
    private profileRepository;
    constructor(profileRepository: Repository<Profiles>);
    createProfile(profileModel: ProfileModel): Promise<FetchProfileModel>;
    getProfile(id: number): Promise<FetchProfileModel>;
    getProfiles(): Promise<FetchProfileModel[]>;
    updateProfile(id: number, updateProfileModel: UpdateProfileModel): Promise<FetchProfileModel>;
    deleteProfile(id: number): Promise<void>;
}
