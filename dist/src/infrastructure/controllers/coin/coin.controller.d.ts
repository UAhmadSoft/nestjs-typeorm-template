import { CoinUseCases } from '../../../usecases/coin/coin.usecases';
export declare class CoinController {
    private readonly coinUseCases;
    constructor(coinUseCases: CoinUseCases);
    getCoins(): Promise<import("../../../domain/models/coin").FetchCoinModel[]>;
}
