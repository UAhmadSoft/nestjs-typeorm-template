"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletUseCases = void 0;
const common_1 = require("@nestjs/common");
const wallet_repository_1 = require("../../infrastructure/repository/wallet.repository");
let WalletUseCases = class WalletUseCases {
    constructor(walletRepository) {
        this.walletRepository = walletRepository;
    }
    async deposit(body) {
        return this.walletRepository.deposit(body);
    }
    async withdraw(body) {
        return this.walletRepository.withdraw(body);
    }
    async depositHistory(coin) {
        return this.walletRepository.depositHistory(coin);
    }
    async transfer(body) {
        return this.walletRepository.transfer(body);
    }
    async convert(body) {
        return this.walletRepository.convert(body);
    }
    async getTokenPrice(symbol) {
        return this.walletRepository.getTokenPrice(symbol);
    }
    async getAccountTokenBalance() {
        return this.walletRepository.getAccountTokenBalance();
    }
    async getAssetBalance(symbol) {
        return this.walletRepository.getAssetBalance(symbol);
    }
    async getFundingWallet() {
        return this.walletRepository.getFundingWallet();
    }
    async getOrderBook(symbol) {
        return this.walletRepository.getOrderBook(symbol);
    }
    async getTradeHistory(symbol) {
        return this.walletRepository.getTradeHistory(symbol);
    }
    async getOrderHistory(symbol) {
        return this.walletRepository.getOrderHistory(symbol);
    }
};
WalletUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wallet_repository_1.WalletRepository])
], WalletUseCases);
exports.WalletUseCases = WalletUseCases;
//# sourceMappingURL=wallet.usecases.js.map