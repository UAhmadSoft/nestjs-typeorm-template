import { ConvertHistoryModel, UpdateConvertHistoryModel } from '../../domain/models/converthistory';
import { ConvertHistoryRepository } from '../../infrastructure/repository/converthistory.repository';
export declare class ConvertHistoryUseCases {
    private readonly convertHistoryRepository;
    constructor(convertHistoryRepository: ConvertHistoryRepository);
    createConvertHistory(convertHistoryModel: ConvertHistoryModel): Promise<import("../../domain/models/converthistory").FetchConvertHistoryModel>;
    getConvertHistory(id: number): Promise<{
        data: import("../../domain/models/converthistory").FetchConvertHistoryModel;
    }>;
    updateConvertHistory(id: number, convertHistoryUpdateModel: UpdateConvertHistoryModel): Promise<import("../../domain/models/converthistory").FetchConvertHistoryModel>;
    deleteConvertHistory(id: number): Promise<void>;
}
