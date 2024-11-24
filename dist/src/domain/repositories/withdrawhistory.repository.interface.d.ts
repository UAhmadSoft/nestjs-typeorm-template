import { WithdrawHistoryModel, FetchWithdrawHistoryModel, UpdateWithdrawHistoryModel } from '../models/WithdrawHistory';
export interface IWithdrawHistory {
    createWithdrawHistory(withdrawHistoryModel: WithdrawHistoryModel): Promise<FetchWithdrawHistoryModel>;
    getWithdrawHistory(id: number): Promise<FetchWithdrawHistoryModel>;
    getWithdrawHistory(): Promise<FetchWithdrawHistoryModel[]>;
    updateWithdrawHistory(id: number, updateWithdrawHistoryModel: UpdateWithdrawHistoryModel): Promise<FetchWithdrawHistoryModel>;
    deleteWithdrawHistory(id: number): Promise<void>;
}
