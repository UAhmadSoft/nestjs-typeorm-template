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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceUseCases = void 0;
const common_1 = require("@nestjs/common");
const userpreference_repository_1 = require("../../infrastructure/repository/userpreference.repository");
let UserPreferenceUseCases = class UserPreferenceUseCases {
    constructor(userPreferenceRepository) {
        this.userPreferenceRepository = userPreferenceRepository;
    }
    async createUserPreference(userPreferenceModel) {
        return await this.userPreferenceRepository.createUserPreference(userPreferenceModel);
    }
    async getUserPreference(id) {
        const data = await this.userPreferenceRepository.getUserPreference(id);
        if (!data) {
            throw new common_1.HttpException('UserPreference Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getUserPreferences() {
        return await this.userPreferenceRepository.getUserPreferences();
    }
    async updateUserPreference(id, userPreferenceUpdateModel) {
        return await this.userPreferenceRepository.updateUserPreference(id, userPreferenceUpdateModel);
    }
    async deleteUserPreference(id) {
        return await this.userPreferenceRepository.deleteUserPreference(id);
    }
};
UserPreferenceUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof userpreference_repository_1.UserPreferenceRepository !== "undefined" && userpreference_repository_1.UserPreferenceRepository) === "function" ? _a : Object])
], UserPreferenceUseCases);
exports.UserPreferenceUseCases = UserPreferenceUseCases;
//# sourceMappingURL=userpreference.usecases.js.map