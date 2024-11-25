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
exports.ConvertHistoryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const converthistory_entity_1 = require("../entities/converthistory.entity");
let ConvertHistoryRepository = class ConvertHistoryRepository {
    constructor(convertHistoryRepository) {
        this.convertHistoryRepository = convertHistoryRepository;
    }
    async createConvertHistory(convertHistoryModel) {
        return await this.convertHistoryRepository.save(convertHistoryModel);
    }
    async updateConvertHistory(id, updateConvertHistoryModel) {
        const convertHistory = await this.convertHistoryRepository.findOne({
            where: { id },
        });
        if (convertHistory) {
            const updatedConvertHistory = Object.assign(Object.assign({}, convertHistory), updateConvertHistoryModel);
            return this.convertHistoryRepository.save(updatedConvertHistory);
        }
        return;
    }
    async deleteConvertHistory(id) {
        const result = await this.convertHistoryRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('ConvertHistory Not Found');
        }
        return;
    }
};
ConvertHistoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(converthistory_entity_1.ConvertHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConvertHistoryRepository);
exports.ConvertHistoryRepository = ConvertHistoryRepository;
//# sourceMappingURL=converthistory.repository.js.map