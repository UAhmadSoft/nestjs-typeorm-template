import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletUseCases } from 'src/usecases/wallet/wallet.usecases';
import { ConvertDto, DepositDto, TransferDto, WithdrawDto } from './wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletUseCases: WalletUseCases) {}

  // post for deposit, withdraw, convert and transfer
  @Post('deposit')
  async deposit(@Body() body: DepositDto) {
    return this.walletUseCases.deposit(body);
  }

  @Get('deposit-history/:coin')
  async depositHistory(@Param('coin') coin: string) {
    return this.walletUseCases.depositHistory(coin);
  }

  @Post('withdraw')
  async withdraw(@Body() body: WithdrawDto) {
    return this.walletUseCases.withdraw(body);
  }

  @Post('transfer')
  async transfer(@Body() body: TransferDto) {
    return this.walletUseCases.transfer(body);
  }

  @Post('convert')
  async convert(@Body() body: ConvertDto) {
    return this.walletUseCases.convert(body);
  }

  @Post('get-token-price')
  async getTokenPrice(symbol: string) {
    return this.walletUseCases.getTokenPrice(symbol);
  }

  @Post('get-account-token-balance')
  async getAccountTokenBalance() {
    return this.walletUseCases.getAccountTokenBalance;
  }

  @Post('get-asset-balance')
  async getAssetBalance(symbol: string) {
    return this.walletUseCases.getAssetBalance(symbol);
  }

  @Post('get-funding-wallet')
  async getFundingWallet() {
    return this.walletUseCases.getFundingWallet();
  }

  @Post('get-order-book')
  async getOrderBook(symbol: string) {
    return this.walletUseCases.getOrderBook(symbol);
  }

  @Post('get-trade-history')
  async getTradeHistory(symbol: string) {
    return this.walletUseCases.getTradeHistory(symbol);
  }

  @Post('get-order-history')
  async getOrderHistory(symbol: string) {
    return this.walletUseCases.getOrderHistory(symbol);
  }
}
