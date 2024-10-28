import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserPreferencesResponseModel, UpdateUserPreferencesResponseModel  } from '../../domain/models/userpreferencesresponse';
import { UserPreferencesResponseRepository } from '../../infrastructure/repository/userpreferencesresponse.repository';

@Injectable()
export class UserPreferencesResponseUseCases {
  constructor(private readonly userPreferencesResponseRepository: UserPreferencesResponseRepository) {}

  async createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel) {
    return await this.userPreferencesResponseRepository.createUserPreferencesResponse(userPreferencesResponseModel);
  }

  async getUserPreferencesResponse(id: number) {
    const data = await this.userPreferencesResponseRepository.getUserPreferencesResponse(id);
    if (!data) {
      throw new HttpException('UserPreferencesResponse Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getUserPreferencesResponses() {
    return await this.userPreferencesResponseRepository.getUserPreferencesResponses();
  }

  async updateUserPreferencesResponse(id: number, userPreferencesResponseUpdateModel: UpdateUserPreferencesResponseModel) {
    return await this.userPreferencesResponseRepository.updateUserPreferencesResponse(id, userPreferencesResponseUpdateModel);
  }

  async deleteUserPreferencesResponse(id: number) {
    return await this.userPreferencesResponseRepository.deleteUserPreferencesResponse(id);
  }
}
