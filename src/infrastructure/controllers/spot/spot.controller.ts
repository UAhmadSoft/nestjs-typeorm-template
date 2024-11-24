import { Controller, Param } from '@nestjs/common';
import { SpotUseCases } from 'src/usecases/spot/spot.usecases';
import {
  createLimitOrderDto,
  createMarketAmountOrderDto,
  createMarketQuantityOrderDto,
  createStopLimitOrder,
} from './spot.dto';

@Controller('spot')
export class SpotController {
  constructor(private readonly spotUseCases: SpotUseCases) {}

  async placeNewOrderLimit(body: createLimitOrderDto) {
    return this.spotUseCases.placeNewOrderLimit(body);
  }
  async placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto) {
    return this.spotUseCases.placeNewOrderMarketWithQuantity(body);
  }
  async placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto) {
    return this.spotUseCases.placeNewOrderMarketWithAmount(body);
  }
  async placeStopLimitOrder(body: createStopLimitOrder) {
    return this.spotUseCases.placeStopLimitOrder(body);
  }
  async getOrder(@Param('symbol') symbol: string) {
    return this.spotUseCases.getOrder(symbol);
  }
  async getAccount() {
    return this.spotUseCases.getAccount();
  }
  async cancelOrder(@Param('symbol') symbol: string) {
    return this.spotUseCases.cancelOrder(symbol);
  }
}
