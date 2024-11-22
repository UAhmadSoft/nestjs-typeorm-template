import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CoinModel,
  FetchCoinModel,
  UpdateCoinModel,
} from '../../domain/models/coin';
import { ICoin } from '../../domain/repositories/coin.repository.interface';
import { Coins } from '../entities/coin.entity';

@Injectable()
export class CoinRepository implements ICoin {
  constructor(
    @InjectRepository(Coins)
    private coinRepository: Repository<Coins>,
  ) {}

  async createCoin(coinModel: CoinModel): Promise<FetchCoinModel> {
    return await this.coinRepository.save(coinModel);
  }

  async getCoin(id: number): Promise<FetchCoinModel> {
    return await this.coinRepository.findOne({ where: { id } });
  }

  async getCoins(): Promise<FetchCoinModel[]> {
    return await this.coinRepository.find();
  }

  async updateCoin(
    id: number,
    updateCoinModel: UpdateCoinModel,
  ): Promise<FetchCoinModel> {
    const coin = await this.coinRepository.findOne({ where: { id } });
    if (coin) {
      const updatedCoin = { ...coin, ...updateCoinModel };
      return this.coinRepository.save(updatedCoin);
    }
    return;
  }

  async deleteCoin(id: number): Promise<void> {
    const result = await this.coinRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Coin Not Found');
    }

    return;
  }
}
