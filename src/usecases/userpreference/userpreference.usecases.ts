import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserPreferenceModel, UpdateUserPreferenceModel  } from '../../domain/models/userpreference';
import { UserPreferenceRepository } from '../../infrastructure/repository/userpreference.repository';

@Injectable()
export class UserPreferenceUseCases {
  constructor(private readonly userPreferenceRepository: UserPreferenceRepository) {}

  async createUserPreference(userPreferenceModel: UserPreferenceModel) {
    return await this.userPreferenceRepository.createUserPreference(userPreferenceModel);
  }

  async getUserPreference(id: number) {
    const data = await this.userPreferenceRepository.getUserPreference(id);
    if (!data) {
      throw new HttpException('UserPreference Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getUserPreferences() {
    return await this.userPreferenceRepository.getUserPreferences();
  }

  async updateUserPreference(id: number, userPreferenceUpdateModel: UpdateUserPreferenceModel) {
    return await this.userPreferenceRepository.updateUserPreference(id, userPreferenceUpdateModel);
  }

  async deleteUserPreference(id: number) {
    return await this.userPreferenceRepository.deleteUserPreference(id);
  }
}
