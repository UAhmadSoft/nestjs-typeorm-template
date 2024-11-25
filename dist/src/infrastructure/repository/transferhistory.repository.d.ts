import { Repository } from 'typeorm';
import { TransferHistory } from '../entities/transferhistory.entity';
export declare class TransferHistoryRepository {
    private transferHistoryRepository;
    constructor(transferHistoryRepository: Repository<TransferHistory>);
}
