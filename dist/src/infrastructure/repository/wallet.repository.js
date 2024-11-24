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
exports.WalletRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const coin_entity_1 = require("../entities/coin.entity");
const connector_1 = require("@binance/connector");
const axios_1 = require("axios");
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
console.log('apiKey', apiSecret);
const client = new connector_1.Spot(apiKey, apiSecret);
const baseUrl = 'https://api.binance.com';
let WalletRepository = class WalletRepository {
    constructor(userRepository, coinrepository) {
        this.userRepository = userRepository;
        this.coinrepository = coinrepository;
    }
    async getTokenPrice(symbol) {
        var _a, _b;
        try {
            const response = await axios_1.default.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`);
            const { lastPrice, priceChangePercent, volume, highPrice, lowPrice } = response.data;
            const price = parseFloat(lastPrice);
            const volume24h = parseFloat(volume);
            const turnover24h = price * volume24h;
            return {
                symbol,
                price,
                change24h: parseFloat(priceChangePercent),
                volume24h,
                highPrice24h: parseFloat(highPrice),
                lowPrice24h: parseFloat(lowPrice),
                turnover24h,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting token price: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getAccountTokenBalance() {
        var _a, _b;
        try {
            const { data } = await client.account();
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting account token balance: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getAssetBalance(token) {
        var _a, _b;
        try {
            const { data } = await client.assetDetail({ asset: token.toUpperCase() });
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting asset balance: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getFundingWallet() {
        var _a, _b;
        try {
            const { data } = await client.fundingWallet();
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting funding wallet: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getOrderBook(symbol) {
        var _a, _b;
        try {
            const params = {
                symbol: symbol.toUpperCase(),
                limit: 5,
            };
            const headers = {
                'Content-Type': 'application/json',
                'X-MBX-APIKEY': apiKey,
            };
            const response = await axios_1.default.get(`${baseUrl}/api/v3/depth`, {
                headers,
                params: {
                    symbol: symbol,
                    limit: 10,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting order book: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getTradeHistory(symbol) {
        var _a, _b;
        try {
            const { data } = await client.myTrades(symbol.toUpperCase());
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting trade history: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async getOrderHistory(symbol) {
        var _a, _b;
        try {
            const { data } = await client.myTrades(symbol.toUpperCase());
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting order history: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async depositHistory(coin) {
        var _a, _b;
        try {
            const response = await client.depositHistory({
                coin: coin.toUpperCase(),
                status: 1,
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error getting deposit history: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async deposit(body) {
        var _a, _b;
        const { symbol } = body;
        const coin = await this.coinrepository.findOne({
            where: { symbol: symbol.toUpperCase() },
        });
        if (!coin) {
            throw new common_1.BadRequestException(`No coin found with symbol ${symbol}`);
        }
        try {
            const response = await client.depositAddress(symbol);
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error depositing ${symbol}: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async withdraw(body) {
        var _a, _b;
        const { symbol, amount, address, network } = body;
        const coin = await this.coinrepository.findOne({
            where: { symbol: symbol.toUpperCase() },
        });
        if (!coin) {
            throw new common_1.BadRequestException(`No coin found with symbol ${symbol}`);
        }
        try {
            const response = await client.withdraw(symbol, address, amount, {
                network,
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error withdrawing ${symbol}: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    async convert(body) {
        var _a, _b;
        const { symbol, quantity, side } = body;
        try {
            const response = await client.newOrder(symbol, side, 'MARKET', {
                quantity,
            });
            return response.data;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error converting ${symbol}: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.msg) || error.message || 'Something went wrong'}`);
        }
    }
    createSignature(params) {
        const queryString = new URLSearchParams(params).toString();
        return require('crypto')
            .createHmac('sha256', apiSecret)
            .update(queryString)
            .digest('hex');
    }
    async transfer(body) {
        const { coin, amount, type } = body;
        const endpoint = '/sapi/v1/capital/transfer';
        const timestamp = Date.now();
        const params = {
            coin: coin,
            amount: amount,
            type: type,
            timestamp: timestamp,
            signature: '',
        };
        const signature = this.createSignature(params);
        params.signature = signature;
        try {
            const response = await axios_1.default.post(`${baseUrl}${endpoint}`, null, {
                params: params,
                headers: {
                    'X-MBX-APIKEY': apiKey,
                },
            });
            console.log('Transfer response:', response);
        }
        catch (error) {
            console.error('Error making transfer request:', error.response ? error.response.data : error.message);
        }
    }
};
WalletRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(coin_entity_1.Coins)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], WalletRepository);
exports.WalletRepository = WalletRepository;
//# sourceMappingURL=wallet.repository.js.map