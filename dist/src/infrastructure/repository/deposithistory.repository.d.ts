import { Repository } from 'typeorm';
import { DepositHistoryModel, FetchDepositHistoryModel, UpdateDepositHistoryModel } from '../../domain/models/deposithistory';
import { DepositHistory } from '../entities/deposithistory.entity';
export declare class DepositHistoryRepository {
    private depositHistoryRepository;
    constructor(depositHistoryRepository: Repository<DepositHistory>);
    createDepositHistory(depositHistoryModel: DepositHistoryModel): Promise<FetchDepositHistoryModel>;
    updateDepositHistory(id: number, updateDepositHistoryModel: UpdateDepositHistoryModel): Promise<FetchDepositHistoryModel>;
    deleteDepositHistory(id: number): Promise<void>;
}
