import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  WithdrawHistoryModel,
  FetchWithdrawHistoryModel,
  UpdateWithdrawHistoryModel,
} from '../../domain/models/withdrawhistory';
import { IWithdrawHistory } from '../../domain/repositories/withdrawhistory.repository.interface';
import { WithdrawHistory } from '../entities/withdrawhistory.entity';

@Injectable()
export class WithdrawHistoryRepository implements IWithdrawHistory {
  constructor(
    @InjectRepository(WithdrawHistory)
    private withdrawHistoryRepository: Repository<WithdrawHistory>,
  ) {}
}
