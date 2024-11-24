import { Repository } from 'typeorm';
import { ConvertHistoryModel, FetchConvertHistoryModel, UpdateConvertHistoryModel } from '../../domain/models/converthistory';
import { IConvertHistory } from '../../domain/repositories/converthistory.repository.interface';
import { ConvertHistory } from '../entities/converthistory.entity';
export declare class ConvertHistoryRepository implements IConvertHistory {
    private convertHistoryRepository;
    constructor(convertHistoryRepository: Repository<ConvertHistory>);
    createConvertHistory(convertHistoryModel: ConvertHistoryModel): Promise<FetchConvertHistoryModel>;
    getConvertHistory(id: number): Promise<FetchConvertHistoryModel>;
    updateConvertHistory(id: number, updateConvertHistoryModel: UpdateConvertHistoryModel): Promise<FetchConvertHistoryModel>;
    deleteConvertHistory(id: number): Promise<void>;
}
