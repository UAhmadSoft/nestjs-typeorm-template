import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPreferenceModel, FetchUserPreferenceModel, UpdateUserPreferenceModel  } from '../../domain/models/userpreference';
import { IUserPreference } from '../../domain/repositories/userpreference.repository.interface';
import { UserPreferences } from '../entities/userpreference.entity';

@Injectable()
export class UserPreferenceRepository implements IUserPreference {
  constructor(
    @InjectRepository(UserPreferences)
    private userPreferenceRepository: Repository<UserPreferences>,
  ) {}

  async createUserPreference(userPreferenceModel: UserPreferenceModel): Promise<FetchUserPreferenceModel> {
    return await this.userPreferenceRepository.save(userPreferenceModel);
  }

  async getUserPreference(id: number): Promise<FetchUserPreferenceModel> {
    return await this.userPreferenceRepository.findOne({ where: { id } });
  }

  async getUserPreferences(): Promise<FetchUserPreferenceModel[]> {
    return await this.userPreferenceRepository.find();
  }

  async updateUserPreference(
    id: number,
    updateUserPreferenceModel: UpdateUserPreferenceModel,
  ): Promise<FetchUserPreferenceModel> {
    const userPreference = await this.userPreferenceRepository.findOne({ where: { id } });
    if (userPreference) {
      const updatedUserPreference = { ...userPreference, ...updateUserPreferenceModel };
      return this.userPreferenceRepository.save(updatedUserPreference);
    }
    return;
  }

  async deleteUserPreference(id: number): Promise<void> {
    const result = await this.userPreferenceRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('UserPreference Not Found');
    }

    return;
  }
}
