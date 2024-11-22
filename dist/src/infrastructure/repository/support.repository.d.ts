import { Repository } from 'typeorm';
import { SupportModel, FetchSupportModel, UpdateSupportModel } from '../../domain/models/support';
import { ISupport } from '../../domain/repositories/support.repository.interface';
import { Supports } from '../entities/support.entity';
export declare class SupportRepository implements ISupport {
    private supportRepository;
    constructor(supportRepository: Repository<Supports>);
    createSupport(supportModel: SupportModel): Promise<FetchSupportModel>;
    getSupportsCount(): Promise<number>;
    getSupport(id: number): Promise<FetchSupportModel>;
    getSupports(): Promise<FetchSupportModel[]>;
    updateSupport(id: number, updateSupportModel: UpdateSupportModel): Promise<FetchSupportModel>;
    deleteSupport(id: number): Promise<void>;
}
