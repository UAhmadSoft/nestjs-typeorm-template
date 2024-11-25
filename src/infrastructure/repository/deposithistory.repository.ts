import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  DepositHistoryModel,
  FetchDepositHistoryModel,
  UpdateDepositHistoryModel,
} from '../../domain/models/deposithistory';
import { IDepositHistory } from '../../domain/repositories/deposithistory.repository.interface';
import { DepositHistory } from '../entities/deposithistory.entity';

@Injectable()
export class DepositHistoryRepository {
  constructor(
    @InjectRepository(DepositHistory)
    private depositHistoryRepository: Repository<DepositHistory>,
  ) {}

  async createDepositHistory(
    depositHistoryModel: DepositHistoryModel,
  ): Promise<FetchDepositHistoryModel> {
    return await this.depositHistoryRepository.save(depositHistoryModel);
  }

  async updateDepositHistory(
    id: number,
    updateDepositHistoryModel: UpdateDepositHistoryModel,
  ): Promise<FetchDepositHistoryModel> {
    const depositHistory = await this.depositHistoryRepository.findOne({
      where: { id },
    });
    if (depositHistory) {
      const updatedDepositHistory = {
        ...depositHistory,
        ...updateDepositHistoryModel,
      };
      return this.depositHistoryRepository.save(updatedDepositHistory);
    }
    return;
  }

  async deleteDepositHistory(id: number): Promise<void> {
    const result = await this.depositHistoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('DepositHistory Not Found');
    }

    return;
  }
}
