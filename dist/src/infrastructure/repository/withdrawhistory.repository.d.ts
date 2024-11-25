import { Repository } from 'typeorm';
import { WithdrawHistory } from '../entities/withdrawhistory.entity';
export declare class WithdrawHistoryRepository {
    private withdrawHistoryRepository;
    constructor(withdrawHistoryRepository: Repository<WithdrawHistory>);
}
