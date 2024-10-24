import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProfileModel, UpdateProfileModel  } from '../../domain/models/profile';
import { ProfileRepository } from '../../infrastructure/repository/profile.repository';

@Injectable()
export class ProfileUseCases {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async createProfile(profileModel: ProfileModel) {
    return await this.profileRepository.createProfile(profileModel);
  }

  async getProfile(id: number) {
    const data = await this.profileRepository.getProfile(id);
    if (!data) {
      throw new HttpException('Profile Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getProfiles() {
    return await this.profileRepository.getProfiles();
  }

  async updateProfile(id: number, profileUpdateModel: UpdateProfileModel) {
    return await this.profileRepository.updateProfile(id, profileUpdateModel);
  }

  async deleteProfile(id: number) {
    return await this.profileRepository.deleteProfile(id);
  }
}
