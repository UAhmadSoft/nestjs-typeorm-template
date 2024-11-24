import { TransferHistoryUseCases } from '../../../usecases/transferhistory/transferhistory.usecases';
import { CreateTransferHistoryDto, UpdateTransferHistoryDto } from './transferhistory.dto';
export declare class TransferHistoryController {
    private readonly transferHistoryUseCases;
    constructor(transferHistoryUseCases: TransferHistoryUseCases);
    createTransferHistory(transferHistory: CreateTransferHistoryDto): Promise<any>;
    getTransferHistory(id: number): Promise<{
        data: any;
    }>;
    updateTransferHistory(id: number, transferHistory: UpdateTransferHistoryDto): Promise<any>;
    deleteTransferHistory(id: number): Promise<any>;
}
