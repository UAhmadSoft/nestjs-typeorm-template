import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ProfileModel,
  FetchProfileModel,
  UpdateProfileModel,
} from '../../domain/models/profile.model';
import { IProfile } from '../../domain/repositories/profile.repository.interface';
import { Profiles } from '../entities/profile.entity';

@Injectable()
export class ProfileRepository implements IProfile {
  constructor(
    @InjectRepository(Profiles)
    private profileRepository: Repository<Profiles>,
  ) {}

  async createProfile(profileModel: ProfileModel): Promise<FetchProfileModel> {
    return await this.profileRepository.save(profileModel);
  }

  async getProfile(id: number): Promise<FetchProfileModel> {
    return await this.profileRepository.findOne({ where: { id } });
  }

  async getProfiles(): Promise<FetchProfileModel[]> {
    return await this.profileRepository.find();
  }

  async updateProfile(
    id: number,
    updateProfileModel: UpdateProfileModel,
  ): Promise<FetchProfileModel> {
    const profile = await this.profileRepository.findOne({ where: { id } });
    if (profile) {
      const updatedProfile = { ...profile, ...updateProfileModel };
      return this.profileRepository.save(updatedProfile);
    }
    return;
  }

  async deleteProfile(id: number): Promise<void> {
    const result = await this.profileRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Profile Not Found');
    }

    return;
  }
}
