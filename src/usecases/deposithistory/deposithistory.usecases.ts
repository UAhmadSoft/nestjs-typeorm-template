import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  DepositHistoryModel,
  UpdateDepositHistoryModel,
} from '../../domain/models/deposithistory';
import { DepositHistoryRepository } from '../../infrastructure/repository/deposithistory.repository';

@Injectable()
export class DepositHistoryUseCases {
  constructor(
    private readonly depositHistoryRepository: DepositHistoryRepository,
  ) {}
}
