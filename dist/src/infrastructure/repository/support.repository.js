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
exports.SupportRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const support_entity_1 = require("../entities/support.entity");
let SupportRepository = class SupportRepository {
    constructor(supportRepository) {
        this.supportRepository = supportRepository;
    }
    async createSupport(supportModel) {
        return await this.supportRepository.save(supportModel);
    }
    async getSupport(id) {
        return await this.supportRepository.findOne({ where: { id } });
    }
    async getSupports() {
        return await this.supportRepository.find();
    }
    async updateSupport(id, updateSupportModel) {
        const support = await this.supportRepository.findOne({ where: { id } });
        if (support) {
            const updatedSupport = Object.assign(Object.assign({}, support), updateSupportModel);
            return this.supportRepository.save(updatedSupport);
        }
        return;
    }
    async deleteSupport(id) {
        const result = await this.supportRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Support Not Found');
        }
        return;
    }
};
SupportRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(support_entity_1.Supports)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupportRepository);
exports.SupportRepository = SupportRepository;
//# sourceMappingURL=support.repository.js.map