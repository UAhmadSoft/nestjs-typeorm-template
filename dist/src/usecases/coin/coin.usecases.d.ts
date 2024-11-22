import { CoinModel, UpdateCoinModel } from '../../domain/models/coin';
import { CoinRepository } from '../../infrastructure/repository/coin.repository';
export declare class CoinUseCases {
    private readonly coinRepository;
    constructor(coinRepository: CoinRepository);
    createCoin(coinModel: CoinModel): Promise<import("../../domain/models/coin").FetchCoinModel>;
    getCoin(id: number): Promise<{
        data: import("../../domain/models/coin").FetchCoinModel;
    }>;
    getCoins(): Promise<import("../../domain/models/coin").FetchCoinModel[]>;
    updateCoin(id: number, coinUpdateModel: UpdateCoinModel): Promise<import("../../domain/models/coin").FetchCoinModel>;
    deleteCoin(id: number): Promise<void>;
}
