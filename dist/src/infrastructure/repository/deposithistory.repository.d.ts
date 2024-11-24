import { Repository } from 'typeorm';
import { DepositHistoryModel, FetchDepositHistoryModel, UpdateDepositHistoryModel } from '../../domain/models/deposithistory';
import { IDepositHistory } from '../../domain/repositories/deposithistory.repository.interface';
import { DepositHistory } from '../entities/deposithistory.entity';
export declare class DepositHistoryRepository implements IDepositHistory {
    private depositHistoryRepository;
    constructor(depositHistoryRepository: Repository<DepositHistory>);
    createDepositHistory(depositHistoryModel: DepositHistoryModel): Promise<FetchDepositHistoryModel>;
    getDepositHistory(id: number): Promise<FetchDepositHistoryModel>;
    updateDepositHistory(id: number, updateDepositHistoryModel: UpdateDepositHistoryModel): Promise<FetchDepositHistoryModel>;
    deleteDepositHistory(id: number): Promise<void>;
}
