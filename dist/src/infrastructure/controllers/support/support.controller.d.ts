import { SupportUseCases } from '../../../usecases/support/support.usecases';
import { CreateSupportDto } from './support.dto';
export declare class SupportController {
    private readonly supportUseCases;
    constructor(supportUseCases: SupportUseCases);
    createSupport(support: CreateSupportDto): Promise<import("../../../domain/models/support").FetchSupportModel>;
    getSupports(): Promise<import("../../../domain/models/support").FetchSupportModel[]>;
    deleteSupport(id: number): Promise<void>;
}
