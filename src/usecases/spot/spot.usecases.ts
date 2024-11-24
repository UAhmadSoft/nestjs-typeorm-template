import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { WalletRepository } from 'src/infrastructure/repository/wallet.repository';
import {
  ConvertDto,
  DepositDto,
  TransferDto,
  WithdrawDto,
} from 'src/infrastructure/controllers/wallet/wallet.dto';
import { SpotRepository } from 'src/infrastructure/repository/spot.repository';
import {
  createLimitOrderDto,
  createMarketAmountOrderDto,
  createMarketQuantityOrderDto,
  createStopLimitOrder,
} from 'src/infrastructure/controllers/spot/spot.dto';

@Injectable()
export class SpotUseCases {
  constructor(private readonly spotRepository: SpotRepository) {}

  async placeNewOrderLimit(body: createLimitOrderDto) {
    return this.spotRepository.placeNewOrderLimit(body);
  }
  async placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto) {
    return this.spotRepository.placeNewOrderMarketWithQuantity(body);
  }
  async placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto) {
    return this.spotRepository.placeNewOrderMarketWithAmount(body);
  }
  async placeStopLimitOrder(body: createStopLimitOrder) {
    return this.spotRepository.placeStopLimitOrder(body);
  }
  async getOrder(symbol: string) {
    return this.spotRepository.getOrder(symbol);
  }
  async getAccount() {
    return this.spotRepository.getAccount();
  }
  async cancelOrder(symbol: string) {
    return this.spotRepository.cancelOrder(symbol);
  }
}
