import { WithdrawHistoryUseCases } from '../../../usecases/withdrawhistory/withdrawhistory.usecases';
import { CreateWithdrawHistoryDto, UpdateWithdrawHistoryDto } from './withdrawhistory.dto';
export declare class WithdrawHistoryController {
    private readonly withdrawHistoryUseCases;
    constructor(withdrawHistoryUseCases: WithdrawHistoryUseCases);
    createWithdrawHistory(withdrawHistory: CreateWithdrawHistoryDto): any;
    getWithdrawHistory(id: number): any;
    updateWithdrawHistory(id: number, withdrawHistory: UpdateWithdrawHistoryDto): any;
    deleteWithdrawHistory(id: number): any;
}
