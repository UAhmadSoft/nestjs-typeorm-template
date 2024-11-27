import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Post('place-new-order-limit')
  async placeNewOrderLimit(@Body() body: createLimitOrderDto) {
    return this.spotUseCases.placeNewOrderLimit(body);
  }
  @Post('place-new-order-market-with-quantity')
  async placeNewOrderMarketWithQuantity(
    @Body() body: createMarketQuantityOrderDto,
  ) {
    return this.spotUseCases.placeNewOrderMarketWithQuantity(body);
  }
  @Post('place-new-order-market-with-amount')
  async placeNewOrderMarketWithAmount(
    @Body() body: createMarketAmountOrderDto,
  ) {
    return this.spotUseCases.placeNewOrderMarketWithAmount(body);
  }
  @Post('place-stop-limit-order')
  async placeStopLimitOrder(@Body() body: createStopLimitOrder) {
    return this.spotUseCases.placeStopLimitOrder(body);
  }
  @Get('get-order/:symbol')
  async getOrder(@Param('symbol') symbol: string) {
    return this.spotUseCases.getOrder(symbol);
  }
  @Get('get-account')
  async getAccount() {
    return this.spotUseCases.getAccount();
  }
  @Get('cancel-order/:symbol')
  async cancelOrder(@Param('symbol') symbol: string) {
    return this.spotUseCases.cancelOrder(symbol);
  }
}
