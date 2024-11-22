import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CoinModel, UpdateCoinModel  } from '../../domain/models/coin';
import { CoinRepository } from '../../infrastructure/repository/coin.repository';

@Injectable()
export class CoinUseCases {
  constructor(private readonly coinRepository: CoinRepository) {}

  async createCoin(coinModel: CoinModel) {
    return await this.coinRepository.createCoin(coinModel);
  }

  async getCoin(id: number) {
    const data = await this.coinRepository.getCoin(id);
    if (!data) {
      throw new HttpException('Coin Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getCoins() {
    return await this.coinRepository.getCoins();
  }

  async updateCoin(id: number, coinUpdateModel: UpdateCoinModel) {
    return await this.coinRepository.updateCoin(id, coinUpdateModel);
  }

  async deleteCoin(id: number) {
    return await this.coinRepository.deleteCoin(id);
  }
}
