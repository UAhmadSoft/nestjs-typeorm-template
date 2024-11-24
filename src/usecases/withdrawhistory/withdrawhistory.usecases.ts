import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  WithdrawHistoryModel,
  UpdateWithdrawHistoryModel,
} from '../../domain/models/withdrawhistory';
import { WithdrawHistoryRepository } from '../../infrastructure/repository/withdrawhistory.repository';

@Injectable()
export class WithdrawHistoryUseCases {
  constructor(
    private readonly withdrawHistoryRepository: WithdrawHistoryRepository,
  ) {}
}
