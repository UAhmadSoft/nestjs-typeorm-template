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
exports.TransferHistoryUseCases = void 0;
const common_1 = require("@nestjs/common");
const transferhistory_repository_1 = require("../../infrastructure/repository/transferhistory.repository");
let TransferHistoryUseCases = class TransferHistoryUseCases {
    constructor(transferHistoryRepository) {
        this.transferHistoryRepository = transferHistoryRepository;
    }
    async createTransferHistory(transferHistoryModel) {
        return await this.transferHistoryRepository.createTransferHistory(transferHistoryModel);
    }
    async getTransferHistory(id) {
        const data = await this.transferHistoryRepository.getTransferHistory(id);
        if (!data) {
            throw new common_1.HttpException('TransferHistory Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getTransferHistory() {
        return await this.transferHistoryRepository.getTransferHistory();
    }
    async updateTransferHistory(id, transferHistoryUpdateModel) {
        return await this.transferHistoryRepository.updateTransferHistory(id, transferHistoryUpdateModel);
    }
    async deleteTransferHistory(id) {
        return await this.transferHistoryRepository.deleteTransferHistory(id);
    }
};
TransferHistoryUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transferhistory_repository_1.TransferHistoryRepository])
], TransferHistoryUseCases);
exports.TransferHistoryUseCases = TransferHistoryUseCases;
//# sourceMappingURL=transferhistory.usecases.js.map