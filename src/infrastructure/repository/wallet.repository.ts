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
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const apiKeyTest = process.env.API_KEY_TESTNET;
const apiSecretTest = process.env.API_SECRET_TESTNET;
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const client =
  process.env.NODE_ENV === 'test'
    ? new Spot(apiKeyTest, apiSecretTest)
    : new Spot(apiKey, apiSecret);
const baseUrl =
  process.env.NODE_ENV === 'test'
    ? 'https://testnet.binance.vision'
    : 'https://api.binance.com';

@Injectable()
export class WalletRepository implements IWallet {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Coins)
    private coinrepository: Repository<Coins>,
  ) {}

  async getTokenPrice(symbol: string) {
    try {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`,
      );
      const { lastPrice, priceChangePercent, volume, highPrice, lowPrice } =
        response.data;

      const price = parseFloat(lastPrice);
      const volume24h = parseFloat(volume);
      const turnover24h = price * volume24h;

      return {
        symbol,
        price,
        change24h: parseFloat(priceChangePercent),
        volume24h,
        highPrice24h: parseFloat(highPrice),
        lowPrice24h: parseFloat(lowPrice),
        turnover24h,
      };
    } catch (error) {
      throw new BadRequestException(
        `Error getting token price: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getAccountTokenBalance() {
    try {
      const { data } = await client.account();

      return data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting account token balance: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getAssetBalance(token: string) {
    try {
      const { data } = await client.assetDetail({ asset: token.toUpperCase() });

      return data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting asset balance: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getFundingWallet() {
    try {
      const { data } = await client.fundingWallet();
      return data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting funding wallet: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getOrderBook(symbol: string) {
    try {
      const params = {
        symbol: symbol.toUpperCase(),
        limit: 5,
      };
      const headers = {
        'Content-Type': 'application/json',
        'X-MBX-APIKEY': apiKey,
      };
      const response = await axios.get(`${baseUrl}/api/v3/depth`, {
        headers,
        params: {
          symbol: symbol,
          limit: 10, // Adjust limit as needed (default is 100, max is 5000)
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting order book: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getTradeHistory(symbol: string) {
    try {
      const { data } = await client.myTrades(symbol.toUpperCase());

      return data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting trade history: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async getOrderHistory(symbol: string) {
    try {
      const { data } = await client.myTrades(symbol.toUpperCase());

      return data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting order history: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async depositHistory(coin: string) {
    try {
      const response = await client.depositHistory({
        coin: coin.toUpperCase(),
        status: 1,
      });
      return response.data;
    } catch (error) {
      throw new BadRequestException(
        `Error getting deposit history: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  async deposit(body: DepositDto) {
    const { symbol } = body;
    const coin = await this.coinrepository.findOne({
      where: { symbol: symbol.toUpperCase() },
    });

    if (!coin) {
      throw new BadRequestException(`No coin found with symbol ${symbol}`);
    }

    try {
      const response = await client.depositAddress(symbol);
      return response.data;
    } catch (error) {
      throw new BadRequestException(
        `Error depositing ${symbol}: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
    // TODO User intgetration
  }

  async withdraw(body: WithdrawDto) {
    const { symbol, amount, address, network } = body;
    const coin = await this.coinrepository.findOne({
      where: { symbol: symbol.toUpperCase() },
    });

    if (!coin) {
      throw new BadRequestException(`No coin found with symbol ${symbol}`);
    }

    try {
      const response = await client.withdraw(symbol, address, amount, {
        network,
      });
      return response.data;
    } catch (error) {
      throw new BadRequestException(
        `Error withdrawing ${symbol}: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
    // TODO User intgetration
  }

  async convert(body: ConvertDto) {
    const { symbol, quantity, side } = body;
    try {
      const response = await client.newOrder(symbol, side, 'MARKET', {
        quantity,
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(
        `Error converting ${symbol}: ${
          error.response?.data?.msg || error.message || 'Something went wrong'
        }`,
      );
    }
  }

  // Function to create a signature
  createSignature(params: any) {
    const queryString = new URLSearchParams(params).toString();
    return require('crypto')
      .createHmac('sha256', apiSecret)
      .update(queryString)
      .digest('hex');
  }

  async transfer(body: TransferDto) {
    const { coin, amount, type } = body;
    const endpoint = '/sapi/v1/capital/transfer';
    const timestamp = Date.now();

    // Create parameters for the transfer request
    const params = {
      coin: coin,
      amount: amount,
      type: type, // SPOT_TO_FUNDING or FUNDING_TO_SPOT
      timestamp: timestamp,
      signature: '',
    };

    // Add signature to the parameters
    const signature = this.createSignature(params);
    params.signature = signature;

    try {
      // Send the transfer request to Binance API
      const response = await axios.post(`${baseUrl}${endpoint}`, null, {
        params: params,
        headers: {
          'X-MBX-APIKEY': apiKey, // Your Binance API key
        },
      });

      console.log('Transfer response:', response);
    } catch (error) {
      console.error(
        'Error making transfer request:',
        error.response ? error.response.data : error.message,
      );
    }
  }
}
