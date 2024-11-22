import { CoinUseCases } from '../../../usecases/coin/coin.usecases';
import { CreateCoinDto, UpdateCoinDto } from './coin.dto';
export declare class CoinController {
    private readonly coinUseCases;
    constructor(coinUseCases: CoinUseCases);
    createCoin(coin: CreateCoinDto): Promise<import("../../../domain/models/coin").FetchCoinModel>;
    getCoin(id: number): Promise<{
        data: import("../../../domain/models/coin").FetchCoinModel;
    }>;
    getCoins(): Promise<import("../../../domain/models/coin").FetchCoinModel[]>;
    updateCoin(id: number, coin: UpdateCoinDto): Promise<import("../../../domain/models/coin").FetchCoinModel>;
    deleteCoin(id: number): Promise<void>;
}
