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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const coin_entity_1 = require("../entities/coin.entity");
let CoinRepository = class CoinRepository {
    constructor(coinRepository) {
        this.coinRepository = coinRepository;
    }
    async createCoin(coinModel) {
        return await this.coinRepository.save(coinModel);
    }
    async getCoin(id) {
        return await this.coinRepository.findOne({ where: { id } });
    }
    async getCoins() {
        return await this.coinRepository.find();
    }
    async updateCoin(id, updateCoinModel) {
        const coin = await this.coinRepository.findOne({ where: { id } });
        if (coin) {
            const updatedCoin = Object.assign(Object.assign({}, coin), updateCoinModel);
            return this.coinRepository.save(updatedCoin);
        }
        return;
    }
    async deleteCoin(id) {
        const result = await this.coinRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Coin Not Found');
        }
        return;
    }
};
CoinRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coin_entity_1.Coins)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoinRepository);
exports.CoinRepository = CoinRepository;
//# sourceMappingURL=coin.repository.js.map