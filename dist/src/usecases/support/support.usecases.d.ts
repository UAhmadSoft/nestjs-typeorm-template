import { SupportModel, UpdateSupportModel } from '../../domain/models/support';
import { SupportRepository } from '../../infrastructure/repository/support.repository';
export declare class SupportUseCases {
    private readonly supportRepository;
    constructor(supportRepository: SupportRepository);
    createSupport(supportModel: SupportModel): Promise<any>;
    getSupport(id: number): Promise<{
        data: any;
    }>;
    getSupports(): Promise<any>;
    updateSupport(id: number, supportUpdateModel: UpdateSupportModel): Promise<any>;
    deleteSupport(id: number): Promise<any>;
}
