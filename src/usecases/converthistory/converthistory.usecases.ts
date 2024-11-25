import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ConvertHistoryModel,
  UpdateConvertHistoryModel,
} from '../../domain/models/converthistory';
import { ConvertHistoryRepository } from '../../infrastructure/repository/converthistory.repository';

@Injectable()
export class ConvertHistoryUseCases {
  constructor(
    private readonly convertHistoryRepository: ConvertHistoryRepository,
  ) {}

  async createConvertHistory(convertHistoryModel: ConvertHistoryModel) {
    return await this.convertHistoryRepository.createConvertHistory(
      convertHistoryModel,
    );
  }

  async updateConvertHistory(
    id: number,
    convertHistoryUpdateModel: UpdateConvertHistoryModel,
  ) {
    return await this.convertHistoryRepository.updateConvertHistory(
      id,
      convertHistoryUpdateModel,
    );
  }

  async deleteConvertHistory(id: number) {
    return await this.convertHistoryRepository.deleteConvertHistory(id);
  }
}
