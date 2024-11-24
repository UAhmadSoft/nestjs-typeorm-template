import {
  DepositHistoryModel,
  FetchDepositHistoryModel,
  UpdateDepositHistoryModel,
} from '../models/DepositHistory';
export interface IDepositHistory {
  createDepositHistory(
    depositHistoryModel: DepositHistoryModel,
  ): Promise<FetchDepositHistoryModel>;
  getDepositHistory(id: number): Promise<FetchDepositHistoryModel>;
  getDepositHistory(): Promise<FetchDepositHistoryModel[]>;
  updateDepositHistory(
    id: number,
    updateDepositHistoryModel: UpdateDepositHistoryModel,
  ): Promise<FetchDepositHistoryModel>;
  deleteDepositHistory(id: number): Promise<void>;
}
