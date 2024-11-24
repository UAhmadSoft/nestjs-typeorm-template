import { TransferHistoryModel, UpdateTransferHistoryModel } from '../../domain/models/transferhistory';
import { TransferHistoryRepository } from '../../infrastructure/repository/transferhistory.repository';
export declare class TransferHistoryUseCases {
    private readonly transferHistoryRepository;
    constructor(transferHistoryRepository: TransferHistoryRepository);
    createTransferHistory(transferHistoryModel: TransferHistoryModel): Promise<any>;
    getTransferHistory(id: number): Promise<{
        data: any;
    }>;
    updateTransferHistory(id: number, transferHistoryUpdateModel: UpdateTransferHistoryModel): Promise<any>;
    deleteTransferHistory(id: number): Promise<any>;
}
