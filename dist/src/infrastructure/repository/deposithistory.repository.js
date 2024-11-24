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
exports.DepositHistoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const deposithistory_entity_1 = require("../entities/deposithistory.entity");
let DepositHistoryRepository = class DepositHistoryRepository {
    constructor(depositHistoryRepository) {
        this.depositHistoryRepository = depositHistoryRepository;
    }
    async createDepositHistory(depositHistoryModel) {
        return await this.depositHistoryRepository.save(depositHistoryModel);
    }
    async getDepositHistory(id) {
        return await this.depositHistoryRepository.findOne({ where: { id } });
    }
    async getDepositHistory() {
        return await this.depositHistoryRepository.find();
    }
    async updateDepositHistory(id, updateDepositHistoryModel) {
        const depositHistory = await this.depositHistoryRepository.findOne({
            where: { id },
        });
        if (depositHistory) {
            const updatedDepositHistory = Object.assign(Object.assign({}, depositHistory), updateDepositHistoryModel);
            return this.depositHistoryRepository.save(updatedDepositHistory);
        }
        return;
    }
    async deleteDepositHistory(id) {
        const result = await this.depositHistoryRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('DepositHistory Not Found');
        }
        return;
    }
};
DepositHistoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(deposithistory_entity_1.DepositHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepositHistoryRepository);
exports.DepositHistoryRepository = DepositHistoryRepository;
//# sourceMappingURL=deposithistory.repository.js.map