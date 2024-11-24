import { TransferHistoryModel, FetchTransferHistoryModel, UpdateTransferHistoryModel } from '../models/TransferHistory';
export interface ITransferHistory {
    createTransferHistory(transferHistoryModel: TransferHistoryModel): Promise<FetchTransferHistoryModel>;
    getTransferHistory(id: number): Promise<FetchTransferHistoryModel>;
    getTransferHistory(): Promise<FetchTransferHistoryModel[]>;
    updateTransferHistory(id: number, updateTransferHistoryModel: UpdateTransferHistoryModel): Promise<FetchTransferHistoryModel>;
    deleteTransferHistory(id: number): Promise<void>;
}
