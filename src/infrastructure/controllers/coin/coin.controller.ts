import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../infrastructure/common/guards/jwtAuth.guard';
import { CoinUseCases } from '../../../usecases/coin/coin.usecases';
import { CreateCoinDto, UpdateCoinDto } from './coin.dto';

@Controller('coins')
@UseGuards(JwtAuthGuard)
export class CoinController {
  constructor(private readonly coinUseCases: CoinUseCases) {}

  @Post()
  createCoin(@Body() coin: CreateCoinDto) {
    return this.coinUseCases.createCoin(coin);
  }

  @Get(':id')
  getCoin(@Param('id', ParseIntPipe) id: number) {
    return this.coinUseCases.getCoin(id);
  }

  @Get()
  getCoins() {
    return this.coinUseCases.getCoins();
  }

  @Put(':id')
  updateCoin(
    @Param('id', ParseIntPipe) id: number,
    @Body() coin: UpdateCoinDto,
  ) {
    return this.coinUseCases.updateCoin(id, coin);
  }

  @Delete(':id')
  deleteCoin(@Param('id', ParseIntPipe) id: number) {
    return this.coinUseCases.deleteCoin(id);
  }
}
