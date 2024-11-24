import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  TransferHistoryModel,
  UpdateTransferHistoryModel,
} from '../../domain/models/transferhistory';
import { TransferHistoryRepository } from '../../infrastructure/repository/transferhistory.repository';

@Injectable()
export class TransferHistoryUseCases {
  constructor(
    private readonly transferHistoryRepository: TransferHistoryRepository,
  ) {}

  async createTransferHistory(transferHistoryModel: TransferHistoryModel) {
    return await this.transferHistoryRepository.createTransferHistory(
      transferHistoryModel,
    );
  }

  async getTransferHistory(id: number) {
    const data = await this.transferHistoryRepository.getTransferHistory(id);
    if (!data) {
      throw new HttpException(
        'TransferHistory Not Found',
        HttpStatus.NOT_FOUND,
      );
    }
    return { data };
  }

  async getTransferHistory() {
    return await this.transferHistoryRepository.getTransferHistory();
  }

  async updateTransferHistory(
    id: number,
    transferHistoryUpdateModel: UpdateTransferHistoryModel,
  ) {
    return await this.transferHistoryRepository.updateTransferHistory(
      id,
      transferHistoryUpdateModel,
    );
  }

  async deleteTransferHistory(id: number) {
    return await this.transferHistoryRepository.deleteTransferHistory(id);
  }
}
