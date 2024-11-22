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
exports.CoinUseCases = void 0;
const common_1 = require("@nestjs/common");
const coin_repository_1 = require("../../infrastructure/repository/coin.repository");
let CoinUseCases = class CoinUseCases {
    constructor(coinRepository) {
        this.coinRepository = coinRepository;
    }
    async createCoin(coinModel) {
        return await this.coinRepository.createCoin(coinModel);
    }
    async getCoin(id) {
        const data = await this.coinRepository.getCoin(id);
        if (!data) {
            throw new common_1.HttpException('Coin Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getCoins() {
        return await this.coinRepository.getCoins();
    }
    async updateCoin(id, coinUpdateModel) {
        return await this.coinRepository.updateCoin(id, coinUpdateModel);
    }
    async deleteCoin(id) {
        return await this.coinRepository.deleteCoin(id);
    }
};
CoinUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coin_repository_1.CoinRepository])
], CoinUseCases);
exports.CoinUseCases = CoinUseCases;
//# sourceMappingURL=coin.usecases.js.map