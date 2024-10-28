import { SupportModel, UpdateSupportModel } from '../../domain/models/support';
import { SupportRepository } from '../../infrastructure/repository/support.repository';
export declare class SupportUseCases {
    private readonly supportRepository;
    constructor(supportRepository: SupportRepository);
    createSupport(supportModel: SupportModel): Promise<import("../../domain/models/support").FetchSupportModel>;
    getSupport(id: number): Promise<{
        data: import("../../domain/models/support").FetchSupportModel;
    }>;
    getSupports(): Promise<import("../../domain/models/support").FetchSupportModel[]>;
    updateSupport(id: number, supportUpdateModel: UpdateSupportModel): Promise<import("../../domain/models/support").FetchSupportModel>;
    deleteSupport(id: number): Promise<void>;
}
