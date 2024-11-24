import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ConvertHistoryModel,
  FetchConvertHistoryModel,
  UpdateConvertHistoryModel,
} from '../../domain/models/converthistory';
import { IConvertHistory } from '../../domain/repositories/converthistory.repository.interface';
import { ConvertHistory } from '../entities/converthistory.entity';

@Injectable()
export class ConvertHistoryRepository implements IConvertHistory {
  constructor(
    @InjectRepository(ConvertHistory)
    private convertHistoryRepository: Repository<ConvertHistory>,
  ) {}

  async createConvertHistory(
    convertHistoryModel: ConvertHistoryModel,
  ): Promise<FetchConvertHistoryModel> {
    return await this.convertHistoryRepository.save(convertHistoryModel);
  }

  async getConvertHistory(id: number): Promise<FetchConvertHistoryModel> {
    return await this.convertHistoryRepository.findOne({ where: { id } });
  }

  async getConvertHistory(): Promise<FetchConvertHistoryModel[]> {
    return await this.convertHistoryRepository.find();
  }

  async updateConvertHistory(
    id: number,
    updateConvertHistoryModel: UpdateConvertHistoryModel,
  ): Promise<FetchConvertHistoryModel> {
    const convertHistory = await this.convertHistoryRepository.findOne({
      where: { id },
    });
    if (convertHistory) {
      const updatedConvertHistory = {
        ...convertHistory,
        ...updateConvertHistoryModel,
      };
      return this.convertHistoryRepository.save(updatedConvertHistory);
    }
    return;
  }

  async deleteConvertHistory(id: number): Promise<void> {
    const result = await this.convertHistoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('ConvertHistory Not Found');
    }

    return;
  }
}
