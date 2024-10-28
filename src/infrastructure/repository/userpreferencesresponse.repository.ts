import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPreferencesResponseModel, FetchUserPreferencesResponseModel, UpdateUserPreferencesResponseModel  } from '../../domain/models/userpreferencesresponse';
import { IUserPreferencesResponse } from '../../domain/repositories/userpreferencesresponse.repository.interface';
import { UserPreferencesResponses } from '../entities/userpreferencesresponse.entity';

@Injectable()
export class UserPreferencesResponseRepository implements IUserPreferencesResponse {
  constructor(
    @InjectRepository(UserPreferencesResponses)
    private userPreferencesResponseRepository: Repository<UserPreferencesResponses>,
  ) {}

  async createUserPreferencesResponse(userPreferencesResponseModel: UserPreferencesResponseModel): Promise<FetchUserPreferencesResponseModel> {
    return await this.userPreferencesResponseRepository.save(userPreferencesResponseModel);
  }

  async getUserPreferencesResponse(id: number): Promise<FetchUserPreferencesResponseModel> {
    return await this.userPreferencesResponseRepository.findOne({ where: { id } });
  }

  async getUserPreferencesResponses(): Promise<FetchUserPreferencesResponseModel[]> {
    return await this.userPreferencesResponseRepository.find();
  }

  async updateUserPreferencesResponse(
    id: number,
    updateUserPreferencesResponseModel: UpdateUserPreferencesResponseModel,
  ): Promise<FetchUserPreferencesResponseModel> {
    const userPreferencesResponse = await this.userPreferencesResponseRepository.findOne({ where: { id } });
    if (userPreferencesResponse) {
      const updatedUserPreferencesResponse = { ...userPreferencesResponse, ...updateUserPreferencesResponseModel };
      return this.userPreferencesResponseRepository.save(updatedUserPreferencesResponse);
    }
    return;
  }

  async deleteUserPreferencesResponse(id: number): Promise<void> {
    const result = await this.userPreferencesResponseRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('UserPreferencesResponse Not Found');
    }

    return;
  }
}
