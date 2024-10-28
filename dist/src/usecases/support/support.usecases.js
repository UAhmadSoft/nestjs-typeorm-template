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
exports.SupportUseCases = void 0;
const common_1 = require("@nestjs/common");
const support_repository_1 = require("../../infrastructure/repository/support.repository");
let SupportUseCases = class SupportUseCases {
    constructor(supportRepository) {
        this.supportRepository = supportRepository;
    }
    async createSupport(supportModel) {
        return await this.supportRepository.createSupport(supportModel);
    }
    async getSupport(id) {
        const data = await this.supportRepository.getSupport(id);
        if (!data) {
            throw new common_1.HttpException('Support Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getSupports() {
        return await this.supportRepository.getSupports();
    }
    async updateSupport(id, supportUpdateModel) {
        return await this.supportRepository.updateSupport(id, supportUpdateModel);
    }
    async deleteSupport(id) {
        return await this.supportRepository.deleteSupport(id);
    }
};
SupportUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [support_repository_1.SupportRepository])
], SupportUseCases);
exports.SupportUseCases = SupportUseCases;
//# sourceMappingURL=support.usecases.js.map