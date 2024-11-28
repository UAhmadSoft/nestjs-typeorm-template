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
exports.SpotRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const coin_entity_1 = require("../entities/coin.entity");
const connector_1 = require("@binance/connector");
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const apiKeyTest = process.env.API_KEY_TESTNET;
const apiSecretTest = process.env.API_SECRET_TESTNET;
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const client = process.env.NODE_ENV === 'test'
    ? new connector_1.Spot(apiKeyTest, apiSecretTest)
    : new connector_1.Spot(apiKey, apiSecret);
const baseUrl = process.env.NODE_ENV === 'test'
    ? 'https://testnet.binance.vision'
    : 'https://api.binance.com';
let SpotRepository = class SpotRepository {
    constructor(userRepository, coinrepository) {
        this.userRepository = userRepository;
        this.coinrepository = coinrepository;
    }
    async coinInfo(symbol) {
        const coinInfo = await client.exchangeInfo({ symbol: symbol });
        const minQty = parseFloat(coinInfo.data.symbols[0].filters[1].minQty);
        console.log(minQty);
        return minQty.toString().split('.')[1].length;
    }
    async amountToQty(amount, price, minValueAmount) {
        const quantity = parseFloat(((1 / price) * amount).toString()).toFixed(minValueAmount);
        console.log(quantity);
        return quantity;
    }
    async placeNewOrderLimit(body) {
        const { symbol, amount, price } = body;
        const minAmount = await this.coinInfo(symbol);
        console.log(minAmount);
        const quantity = await this.amountToQty(amount, price, minAmount);
        console.log(quantity);
        const order = await client.newOrder(symbol, 'BUY', 'LIMIT', {
            price: price,
            quantity: quantity,
            timeInForce: 'GTC',
        });
        console.log(order);
        return order;
    }
    async placeNewOrderMarketWithQuantity(body) {
        try {
            const { symbol, quantity } = body;
            const order = await client.newOrder(symbol, body.side.toUpperCase(), 'MARKET', {
                quantity: quantity,
            });
            console.log(order);
            return order;
        }
        catch (e) {
            console.log('e', e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async placeNewOrderMarketWithAmount(body) {
        try {
            const { symbol, amount } = body;
            const order = await client.newOrder(symbol, body.side.toUpperCase(), 'MARKET', {
                quoteOrderQty: amount,
            });
            console.log(order);
            return order;
        }
        catch (e) {
            console.log('e', e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async placeStopLimitOrder(body) {
        try {
            const { symbol, quantity, stopPrice, limitPrice, side, stopLimitTime } = body;
            const response = await client.newOrder(symbol, side, 'STOP_LOSS_LIMIT', {
                timeInForce: 'GTC',
                quantity: quantity,
                stopPrice: stopPrice,
                price: limitPrice,
            });
            console.log(response);
            return response.data;
        }
        catch (e) {
            console.log('e', e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async getOrder(symbol) {
        const order = await client.getOrder(symbol.toUpperCase());
        return order;
    }
    async getAccount() {
        const account = await client.getAccount();
        return account;
    }
    async cancelOrder(symbol) {
        const order = await client.cancelOrder(symbol.toUpperCase());
        return order;
    }
};
SpotRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(coin_entity_1.Coins)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SpotRepository);
exports.SpotRepository = SpotRepository;
//# sourceMappingURL=spot.repository.js.map