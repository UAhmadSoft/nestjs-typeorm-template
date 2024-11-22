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
exports.UserPreferenceRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const userpreference_entity_1 = require("../entities/userpreference.entity");
let UserPreferenceRepository = class UserPreferenceRepository {
    constructor(userPreferenceRepository) {
        this.userPreferenceRepository = userPreferenceRepository;
    }
    async createUserPreference(userPreferenceModel) {
        return await this.userPreferenceRepository.save(Object.assign(Object.assign({}, userPreferenceModel), { options: `{${userPreferenceModel.options.join(',')}}` }));
    }
    async getUserPreference(id) {
        return await this.userPreferenceRepository.findOne({ where: { id } });
    }
    async getUserPreferences() {
        return await this.userPreferenceRepository.find();
    }
    async updateUserPreference(id, updateUserPreferenceModel) {
        const userPreference = await this.userPreferenceRepository.findOne({
            where: { id },
        });
        if (userPreference) {
            const updatedUserPreference = Object.assign(Object.assign({}, userPreference), updateUserPreferenceModel);
            return this.userPreferenceRepository.save(updatedUserPreference);
        }
        return;
    }
    async deleteUserPreference(id) {
        const result = await this.userPreferenceRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('UserPreference Not Found');
        }
        return;
    }
};
UserPreferenceRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userpreference_entity_1.UserPreferences)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserPreferenceRepository);
exports.UserPreferenceRepository = UserPreferenceRepository;
//# sourceMappingURL=userpreference.repository.js.map