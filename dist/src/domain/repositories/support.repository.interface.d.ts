import { SupportModel, FetchSupportModel, UpdateSupportModel } from '../models/Support';
export interface ISupport {
    createSupport(supportModel: SupportModel): Promise<FetchSupportModel>;
    getSupport(id: number): Promise<FetchSupportModel>;
    getSupports(): Promise<FetchSupportModel[]>;
    updateSupport(id: number, updateSupportModel: UpdateSupportModel): Promise<FetchSupportModel>;
    deleteSupport(id: number): Promise<void>;
}
