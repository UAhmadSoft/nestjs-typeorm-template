import {
  ConvertHistoryModel,
  FetchConvertHistoryModel,
  UpdateConvertHistoryModel,
} from '../models/ConvertHistory';
export interface IConvertHistory {
  createConvertHistory(
    convertHistoryModel: ConvertHistoryModel,
  ): Promise<FetchConvertHistoryModel>;
  getConvertHistory(id: number): Promise<FetchConvertHistoryModel>;
  getConvertHistory(): Promise<FetchConvertHistoryModel[]>;
  updateConvertHistory(
    id: number,
    updateConvertHistoryModel: UpdateConvertHistoryModel,
  ): Promise<FetchConvertHistoryModel>;
  deleteConvertHistory(id: number): Promise<void>;
}
