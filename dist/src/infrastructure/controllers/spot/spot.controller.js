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
exports.SpotController = void 0;
const common_1 = require("@nestjs/common");
const spot_usecases_1 = require("../../../usecases/spot/spot.usecases");
const spot_dto_1 = require("./spot.dto");
let SpotController = class SpotController {
    constructor(spotUseCases) {
        this.spotUseCases = spotUseCases;
    }
    async placeNewOrderLimit(body) {
        return this.spotUseCases.placeNewOrderLimit(body);
    }
    async placeNewOrderMarketWithQuantity(body) {
        return this.spotUseCases.placeNewOrderMarketWithQuantity(body);
    }
    async placeNewOrderMarketWithAmount(body) {
        return this.spotUseCases.placeNewOrderMarketWithAmount(body);
    }
    async placeStopLimitOrder(body) {
        return this.spotUseCases.placeStopLimitOrder(body);
    }
    async getOrder(symbol) {
        return this.spotUseCases.getOrder(symbol);
    }
    async getAccount() {
        return this.spotUseCases.getAccount();
    }
    async cancelOrder(symbol) {
        return this.spotUseCases.cancelOrder(symbol);
    }
};
__decorate([
    (0, common_1.Post)('place-new-order-limit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_dto_1.createLimitOrderDto]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "placeNewOrderLimit", null);
__decorate([
    (0, common_1.Post)('place-new-order-market-with-quantity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_dto_1.createMarketQuantityOrderDto]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "placeNewOrderMarketWithQuantity", null);
__decorate([
    (0, common_1.Post)('place-new-order-market-with-amount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_dto_1.createMarketAmountOrderDto]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "placeNewOrderMarketWithAmount", null);
__decorate([
    (0, common_1.Post)('place-stop-limit-order'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_dto_1.createStopLimitOrder]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "placeStopLimitOrder", null);
__decorate([
    (0, common_1.Get)('get-order/:symbol'),
    __param(0, (0, common_1.Param)('symbol')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('get-account'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "getAccount", null);
__decorate([
    (0, common_1.Get)('cancel-order/:symbol'),
    __param(0, (0, common_1.Param)('symbol')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpotController.prototype, "cancelOrder", null);
SpotController = __decorate([
    (0, common_1.Controller)('spot'),
    __metadata("design:paramtypes", [spot_usecases_1.SpotUseCases])
], SpotController);
exports.SpotController = SpotController;
//# sourceMappingURL=spot.controller.js.map