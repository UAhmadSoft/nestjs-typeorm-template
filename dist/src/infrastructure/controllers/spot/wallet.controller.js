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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const wallet_usecases_1 = require("../../../usecases/wallet/wallet.usecases");
const wallet_dto_1 = require("./wallet.dto");
let WalletController = class WalletController {
    constructor(walletUseCases) {
        this.walletUseCases = walletUseCases;
    }
    async deposit(body) {
        return this.walletUseCases.deposit(body);
    }
    async depositHistory(coin) {
        return this.walletUseCases.depositHistory(coin);
    }
    async withdraw(body) {
        return this.walletUseCases.withdraw(body);
    }
    async transfer(body) {
        return this.walletUseCases.transfer(body);
    }
    async convert(body) {
        return this.walletUseCases.convert(body);
    }
    async getTokenPrice(symbol) {
        return this.walletUseCases.getTokenPrice(symbol);
    }
    async getAccountTokenBalance() {
        return this.walletUseCases.getAccountTokenBalance;
    }
    async getAssetBalance(symbol) {
        return this.walletUseCases.getAssetBalance(symbol);
    }
    async getFundingWallet() {
        return this.walletUseCases.getFundingWallet();
    }
    async getOrderBook(symbol) {
        return this.walletUseCases.getOrderBook(symbol);
    }
    async getTradeHistory(symbol) {
        return this.walletUseCases.getTradeHistory(symbol);
    }
    async getOrderHistory(symbol) {
        return this.walletUseCases.getOrderHistory(symbol);
    }
};
__decorate([
    (0, common_1.Post)('deposit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof wallet_dto_1.DepositDto !== "undefined" && wallet_dto_1.DepositDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "deposit", null);
__decorate([
    (0, common_1.Get)('deposit-history:coin'),
    __param(0, (0, common_1.Param)('coin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "depositHistory", null);
__decorate([
    (0, common_1.Post)('withdraw'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof wallet_dto_1.WithdrawDto !== "undefined" && wallet_dto_1.WithdrawDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)('transfer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof wallet_dto_1.TransferDto !== "undefined" && wallet_dto_1.TransferDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "transfer", null);
__decorate([
    (0, common_1.Post)('convert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof wallet_dto_1.ConvertDto !== "undefined" && wallet_dto_1.ConvertDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "convert", null);
__decorate([
    (0, common_1.Post)('get-token-price'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getTokenPrice", null);
__decorate([
    (0, common_1.Post)('get-account-token-balance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getAccountTokenBalance", null);
__decorate([
    (0, common_1.Post)('get-asset-balance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getAssetBalance", null);
__decorate([
    (0, common_1.Post)('get-funding-wallet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getFundingWallet", null);
__decorate([
    (0, common_1.Post)('get-order-book'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getOrderBook", null);
__decorate([
    (0, common_1.Post)('get-trade-history'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getTradeHistory", null);
__decorate([
    (0, common_1.Post)('get-order-history'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getOrderHistory", null);
WalletController = __decorate([
    (0, common_1.Controller)('wallet'),
    __metadata("design:paramtypes", [wallet_usecases_1.WalletUseCases])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map