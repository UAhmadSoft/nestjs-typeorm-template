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
exports.ProfileUseCases = void 0;
const common_1 = require("@nestjs/common");
const profile_repository_1 = require("../../infrastructure/repository/profile.repository");
let ProfileUseCases = class ProfileUseCases {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async createProfile(profileModel) {
        return await this.profileRepository.createProfile(profileModel);
    }
    async getProfile(id) {
        const data = await this.profileRepository.getProfile(id);
        if (!data) {
            throw new common_1.HttpException('Profile Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getProfiles() {
        return await this.profileRepository.getProfiles();
    }
    async updateProfile(id, profileUpdateModel) {
        return await this.profileRepository.updateProfile(id, profileUpdateModel);
    }
    async deleteProfile(id) {
        return await this.profileRepository.deleteProfile(id);
    }
};
ProfileUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], ProfileUseCases);
exports.ProfileUseCases = ProfileUseCases;
//# sourceMappingURL=profile.usecases.js.map