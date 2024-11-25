import { Repository } from 'typeorm';
import { ConvertHistoryModel, FetchConvertHistoryModel, UpdateConvertHistoryModel } from '../../domain/models/converthistory';
import { ConvertHistory } from '../entities/converthistory.entity';
export declare class ConvertHistoryRepository {
    private convertHistoryRepository;
    constructor(convertHistoryRepository: Repository<ConvertHistory>);
    createConvertHistory(convertHistoryModel: ConvertHistoryModel): Promise<FetchConvertHistoryModel>;
    updateConvertHistory(id: number, updateConvertHistoryModel: UpdateConvertHistoryModel): Promise<FetchConvertHistoryModel>;
    deleteConvertHistory(id: number): Promise<void>;
}
