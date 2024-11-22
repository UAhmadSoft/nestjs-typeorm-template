import { Repository } from 'typeorm';
import { CoinModel, FetchCoinModel, UpdateCoinModel } from '../../domain/models/coin';
import { ICoin } from '../../domain/repositories/coin.repository.interface';
import { Coins } from '../entities/coin.entity';
export declare class CoinRepository implements ICoin {
    private coinRepository;
    constructor(coinRepository: Repository<Coins>);
    createCoin(coinModel: CoinModel): Promise<FetchCoinModel>;
    getCoin(id: number): Promise<FetchCoinModel>;
    getCoins(): Promise<FetchCoinModel[]>;
    updateCoin(id: number, updateCoinModel: UpdateCoinModel): Promise<FetchCoinModel>;
    deleteCoin(id: number): Promise<void>;
}
