import { Repository } from 'typeorm';
import { ITransferHistory } from '../../domain/repositories/transferhistory.repository.interface';
import { TransferHistory } from '../entities/transferhistory.entity';
export declare class TransferHistoryRepository implements ITransferHistory {
    private transferHistoryRepository;
    constructor(transferHistoryRepository: Repository<TransferHistory>);
}
