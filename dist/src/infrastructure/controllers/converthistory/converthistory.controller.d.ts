import { ConvertHistoryUseCases } from '../../../usecases/converthistory/converthistory.usecases';
import { CreateConvertHistoryDto, UpdateConvertHistoryDto } from './converthistory.dto';
export declare class ConvertHistoryController {
    private readonly convertHistoryUseCases;
    constructor(convertHistoryUseCases: ConvertHistoryUseCases);
    createConvertHistory(convertHistory: CreateConvertHistoryDto): Promise<import("../../../domain/models/converthistory").FetchConvertHistoryModel>;
    getConvertHistory(id: number): Promise<{
        data: import("../../../domain/models/converthistory").FetchConvertHistoryModel;
    }>;
    updateConvertHistory(id: number, convertHistory: UpdateConvertHistoryDto): Promise<import("../../../domain/models/converthistory").FetchConvertHistoryModel>;
    deleteConvertHistory(id: number): Promise<void>;
}
