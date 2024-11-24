import { DepositHistoryUseCases } from '../../../usecases/deposithistory/deposithistory.usecases';
import { CreateDepositHistoryDto, UpdateDepositHistoryDto } from './deposithistory.dto';
export declare class DepositHistoryController {
    private readonly depositHistoryUseCases;
    constructor(depositHistoryUseCases: DepositHistoryUseCases);
    createDepositHistory(depositHistory: CreateDepositHistoryDto): any;
    getDepositHistory(id: number): any;
    updateDepositHistory(id: number, depositHistory: UpdateDepositHistoryDto): any;
    deleteDepositHistory(id: number): any;
}
