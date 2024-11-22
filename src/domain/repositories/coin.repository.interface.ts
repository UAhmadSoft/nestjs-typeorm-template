import { CoinModel, FetchCoinModel, UpdateCoinModel } from '../models/Coin';
export interface ICoin {
  createCoin(coinModel: CoinModel): Promise<FetchCoinModel>;
  getCoin(id: number): Promise<FetchCoinModel>;
  getCoins(): Promise<FetchCoinModel[]>;
  updateCoin(
    id: number,
    updateCoinModel: UpdateCoinModel,
  ): Promise<FetchCoinModel>;
  deleteCoin(id: number): Promise<void>;
}
