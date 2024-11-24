import { Repository } from 'typeorm';
import { IWithdrawHistory } from '../../domain/repositories/withdrawhistory.repository.interface';
import { WithdrawHistory } from '../entities/withdrawhistory.entity';
export declare class WithdrawHistoryRepository implements IWithdrawHistory {
    private withdrawHistoryRepository;
    constructor(withdrawHistoryRepository: Repository<WithdrawHistory>);
}
