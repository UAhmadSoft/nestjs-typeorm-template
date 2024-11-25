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
}
