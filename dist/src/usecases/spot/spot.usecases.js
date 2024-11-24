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
exports.SpotUseCases = void 0;
const common_1 = require("@nestjs/common");
const spot_repository_1 = require("../../infrastructure/repository/spot.repository");
let SpotUseCases = class SpotUseCases {
    constructor(spotRepository) {
        this.spotRepository = spotRepository;
    }
    async placeNewOrderLimit(body) {
        return this.spotRepository.placeNewOrderLimit(body);
    }
    async placeNewOrderMarketWithQuantity(body) {
        return this.spotRepository.placeNewOrderMarketWithQuantity(body);
    }
    async placeNewOrderMarketWithAmount(body) {
        return this.spotRepository.placeNewOrderMarketWithAmount(body);
    }
    async placeStopLimitOrder(body) {
        return this.spotRepository.placeStopLimitOrder(body);
    }
    async getOrder(symbol) {
        return this.spotRepository.getOrder(symbol);
    }
    async getAccount() {
        return this.spotRepository.getAccount();
    }
    async cancelOrder(symbol) {
        return this.spotRepository.cancelOrder(symbol);
    }
};
SpotUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [spot_repository_1.SpotRepository])
], SpotUseCases);
exports.SpotUseCases = SpotUseCases;
//# sourceMappingURL=spot.usecases.js.map