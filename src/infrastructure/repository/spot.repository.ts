import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { IWallet } from 'src/domain/repositories/wallet.repository.interface';
import {
  ConvertDto,
  DepositDto,
  TransferDto,
  WithdrawDto,
} from '../controllers/wallet/wallet.dto';
import { Coins } from '../entities/coin.entity';

import { Spot } from '@binance/connector';
import axios from 'axios';
import { ISpot } from 'src/domain/repositories/spot.repository.interface';
import {
  createLimitOrderDto,
  createMarketAmountOrderDto,
  createMarketQuantityOrderDto,
  createStopLimitOrder,
} from '../controllers/spot/spot.dto';

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const client = new Spot(apiKey, apiSecret);
const baseUrl = 'https://api.binance.com';

@Injectable()
export class SpotRepository implements ISpot {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Coins)
    private coinrepository: Repository<Coins>,
  ) {}

  async coinInfo(symbol: string) {
    const coinInfo = await client.exchangeInfo({ symbol: symbol });
    const minQty = parseFloat(coinInfo.data.symbols[0].filters[1].minQty);
    console.log(minQty);
    return minQty.toString().split('.')[1].length;
  }

  async amountToQty(amount: number, price: number, minValueAmount: number) {
    const quantity = parseFloat(((1 / price) * amount).toString()).toFixed(
      minValueAmount,
    );
    console.log(quantity);
    return quantity;
  }

  async placeNewOrderLimit(body: createLimitOrderDto) {
    const { symbol, amount, price } = body;
    const minAmount = await this.coinInfo(symbol);
    console.log(minAmount);
    const quantity = await this.amountToQty(amount, price, minAmount);
    console.log(quantity);

    const order = await client.newOrder(symbol, 'BUY', 'LIMIT', {
      price: price,
      quantity: quantity,
      timeInForce: 'GTC',
    });
    console.log(order);

    return order;
  }

  async placeNewOrderMarketWithQuantity(body: createMarketQuantityOrderDto) {
    try {
      const { symbol, quantity } = body;
      const order = await client.newOrder(
        symbol,
        body.side.toUpperCase(),
        'MARKET',
        {
          quantity: quantity,
        },
      );
      console.log(order);
      return order;
    } catch (e) {
      console.log('e', e);
      throw new BadRequestException(e.message);
    }
  }

  async placeNewOrderMarketWithAmount(body: createMarketAmountOrderDto) {
    try {
      const { symbol, amount } = body;
      const order = await client.newOrder(
        symbol,
        body.side.toUpperCase(),
        'MARKET',
        {
          quoteOrderQty: amount,
        },
      );
      console.log(order);
      return order;
    } catch (e) {
      console.log('e', e);
      throw new BadRequestException(e.message);
    }
  }

  async placeStopLimitOrder(body: createStopLimitOrder) {
    try {
      const { symbol, quantity, stopPrice, limitPrice, side, stopLimitTime } =
        body;
      // const response = await client.newOrder({
      //   symbol: symbol,
      //   side: side.toUpperCase(),
      //   type: 'STOP_LIMIT',
      //   timeInForce: stopLimitTime,
      //   quantity: quantity,
      //   stopPrice: stopPrice,
      //   price: limitPrice,
      //   stopLimitTime: stopLimitTime,

      // });
      const response = await client.newOrder(symbol, side, 'STOP_LOSS_LIMIT', {
        timeInForce: 'GTC',
        quantity: quantity,
        stopPrice: stopPrice,
        price: limitPrice,
      });
      console.log(response);
      return response.data;
    } catch (e) {
      console.log('e', e);
      throw new BadRequestException(e.message);
    }
  }

  async getOrder(symbol: string) {
    const order = await client.getOrder(symbol.toUpperCase());
    return order;
  }

  async getAccount() {
    const account = await client.getAccount();
    return account;
  }

  async cancelOrder(symbol: string) {
    const order = await client.cancelOrder(symbol.toUpperCase());
    return order;
  }
}
