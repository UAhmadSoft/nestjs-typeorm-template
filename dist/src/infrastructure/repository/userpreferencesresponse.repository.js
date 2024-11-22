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
exports.UserPreferencesResponseRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const userpreferencesresponse_entity_1 = require("../entities/userpreferencesresponse.entity");
let UserPreferencesResponseRepository = class UserPreferencesResponseRepository {
    constructor(userPreferencesResponseRepository) {
        this.userPreferencesResponseRepository = userPreferencesResponseRepository;
    }
    async createUserPreferencesResponse(userPreferencesResponseModel) {
        return await this.userPreferencesResponseRepository.save(Object.assign(Object.assign({}, userPreferencesResponseModel), { options: `{${userPreferencesResponseModel.options.join(',')}}` }));
    }
    async getUserPreferencesResponse(id) {
        return await this.userPreferencesResponseRepository.findOne({
            where: { id },
        });
    }
    async getUserPreferencesResponses() {
        return await this.userPreferencesResponseRepository.find();
    }
    async updateUserPreferencesResponse(id, updateUserPreferencesResponseModel) {
        const userPreferencesResponse = await this.userPreferencesResponseRepository.findOne({ where: { id } });
        if (userPreferencesResponse) {
            const updatedUserPreferencesResponse = Object.assign(Object.assign({}, userPreferencesResponse), updateUserPreferencesResponseModel);
            return this.userPreferencesResponseRepository.save(updatedUserPreferencesResponse);
        }
        return;
    }
    async deleteUserPreferencesResponse(id) {
        const result = await this.userPreferencesResponseRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('UserPreferencesResponse Not Found');
        }
        return;
    }
};
UserPreferencesResponseRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userpreferencesresponse_entity_1.UserPreferencesResponses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserPreferencesResponseRepository);
exports.UserPreferencesResponseRepository = UserPreferencesResponseRepository;
//# sourceMappingURL=userpreferencesresponse.repository.js.map