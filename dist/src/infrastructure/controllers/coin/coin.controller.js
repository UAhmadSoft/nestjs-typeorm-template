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
exports.CoinController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const coin_usecases_1 = require("../../../usecases/coin/coin.usecases");
const coin_dto_1 = require("./coin.dto");
let CoinController = class CoinController {
    constructor(coinUseCases) {
        this.coinUseCases = coinUseCases;
    }
    createCoin(coin) {
        return this.coinUseCases.createCoin(coin);
    }
    getCoin(id) {
        return this.coinUseCases.getCoin(id);
    }
    getCoins() {
        return this.coinUseCases.getCoins();
    }
    updateCoin(id, coin) {
        return this.coinUseCases.updateCoin(id, coin);
    }
    deleteCoin(id) {
        return this.coinUseCases.deleteCoin(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coin_dto_1.CreateCoinDto]),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "createCoin", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "getCoin", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "getCoins", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, coin_dto_1.UpdateCoinDto]),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "updateCoin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CoinController.prototype, "deleteCoin", null);
CoinController = __decorate([
    (0, common_1.Controller)('coins'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [coin_usecases_1.CoinUseCases])
], CoinController);
exports.CoinController = CoinController;
//# sourceMappingURL=coin.controller.js.map