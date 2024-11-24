import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  TransferHistoryModel,
  FetchTransferHistoryModel,
  UpdateTransferHistoryModel,
} from '../../domain/models/transferhistory';
import { ITransferHistory } from '../../domain/repositories/transferhistory.repository.interface';
import { TransferHistory } from '../entities/transferhistory.entity';

@Injectable()
export class TransferHistoryRepository implements ITransferHistory {
  constructor(
    @InjectRepository(TransferHistory)
    private transferHistoryRepository: Repository<TransferHistory>,
  ) {}
}
