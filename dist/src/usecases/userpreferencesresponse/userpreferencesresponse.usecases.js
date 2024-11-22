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
exports.UserPreferencesResponseUseCases = void 0;
const common_1 = require("@nestjs/common");
const userpreferencesresponse_repository_1 = require("../../infrastructure/repository/userpreferencesresponse.repository");
let UserPreferencesResponseUseCases = class UserPreferencesResponseUseCases {
    constructor(userPreferencesResponseRepository) {
        this.userPreferencesResponseRepository = userPreferencesResponseRepository;
    }
    async createUserPreferencesResponse(userPreferencesResponseModel) {
        return await this.userPreferencesResponseRepository.createUserPreferencesResponse(userPreferencesResponseModel);
    }
    async getUserPreferencesResponse(id) {
        const data = await this.userPreferencesResponseRepository.getUserPreferencesResponse(id);
        if (!data) {
            throw new common_1.HttpException('UserPreferencesResponse Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getUserPreferencesResponses() {
        return await this.userPreferencesResponseRepository.getUserPreferencesResponses();
    }
    async updateUserPreferencesResponse(id, userPreferencesResponseUpdateModel) {
        return await this.userPreferencesResponseRepository.updateUserPreferencesResponse(id, userPreferencesResponseUpdateModel);
    }
    async deleteUserPreferencesResponse(id) {
        return await this.userPreferencesResponseRepository.deleteUserPreferencesResponse(id);
    }
};
UserPreferencesResponseUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof userpreferencesresponse_repository_1.UserPreferencesResponseRepository !== "undefined" && userpreferencesresponse_repository_1.UserPreferencesResponseRepository) === "function" ? _a : Object])
], UserPreferencesResponseUseCases);
exports.UserPreferencesResponseUseCases = UserPreferencesResponseUseCases;
//# sourceMappingURL=userpreferencesresponse.usecases.js.map