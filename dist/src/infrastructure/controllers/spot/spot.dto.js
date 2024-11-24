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
exports.createStopLimitOrder = exports.createMarketQuantityOrderDto = exports.createMarketAmountOrderDto = exports.createLimitOrderDto = exports.DepositDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class DepositDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], DepositDto.prototype, "symbol", void 0);
exports.DepositDto = DepositDto;
class createLimitOrderDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createLimitOrderDto.prototype, "symbol", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createLimitOrderDto.prototype, "side", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createLimitOrderDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createLimitOrderDto.prototype, "price", void 0);
exports.createLimitOrderDto = createLimitOrderDto;
class createMarketAmountOrderDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createMarketAmountOrderDto.prototype, "symbol", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['buy', 'sell']),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createMarketAmountOrderDto.prototype, "side", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createMarketAmountOrderDto.prototype, "amount", void 0);
exports.createMarketAmountOrderDto = createMarketAmountOrderDto;
class createMarketQuantityOrderDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createMarketQuantityOrderDto.prototype, "symbol", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['buy', 'sell']),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createMarketQuantityOrderDto.prototype, "side", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createMarketQuantityOrderDto.prototype, "quantity", void 0);
exports.createMarketQuantityOrderDto = createMarketQuantityOrderDto;
class createStopLimitOrder {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createStopLimitOrder.prototype, "symbol", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createStopLimitOrder.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createStopLimitOrder.prototype, "stopPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createStopLimitOrder.prototype, "limitPrice", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['BUY', 'SELL']),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], createStopLimitOrder.prototype, "side", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", Number)
], createStopLimitOrder.prototype, "stopLimitTime", void 0);
exports.createStopLimitOrder = createStopLimitOrder;
//# sourceMappingURL=spot.dto.js.map