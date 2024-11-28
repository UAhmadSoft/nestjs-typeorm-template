import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { WalletRepository } from 'src/infrastructure/repository/wallet.repository';
import {
  ConvertDto,
  DepositDto,
  TransferDto,
  WithdrawDto,
} from 'src/infrastructure/controllers/wallet/wallet.dto';

@Injectable()
export class WalletUseCases {
  constructor(private readonly walletRepository: WalletRepository) {}

  async deposit(body: DepositDto) {
    return this.walletRepository.deposit(body);
  }

  async withdraw(body: WithdrawDto) {
    return this.walletRepository.withdraw(body);
  }

  async depositHistory(coin: string) {
    return this.walletRepository.depositHistory(coin);
  }

  async transfer(body: TransferDto) {
    return this.walletRepository.transfer(body);
  }

  async convert(body: ConvertDto) {
    return this.walletRepository.convert(body);
  }

  async getTokenPrice(symbol: string) {
    return this.walletRepository.getTokenPrice(symbol);
  }
  async getAccountTokenBalance() {
    return this.walletRepository.getAccountTokenBalance();
  }
  async getAssetBalance(symbol: string) {
    return this.walletRepository.getAssetBalance(symbol);
  }
  async getFundingWallet() {
    return this.walletRepository.getFundingWallet();
  }
  async getOrderBook(symbol: string) {
    return this.walletRepository.getOrderBook(symbol);
  }
  async getTradeHistory(symbol: string) {
    return this.walletRepository.getTradeHistory(symbol);
  }
  async getConvertTradeHistory() {
    return this.walletRepository.getConvertTradeHistory();
  }
  async getTransferHistory() {
    return this.walletRepository.getTransferHistory();
  }
  async getOrderHistory(symbol: string) {
    return this.walletRepository.getOrderHistory(symbol);
  }
}
