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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const profile_usecases_1 = require("../../../usecases/profile/profile.usecases");
const profile_dto_1 = require("./profile.dto");
let ProfileController = class ProfileController {
    constructor(profileUseCases) {
        this.profileUseCases = profileUseCases;
    }
    createProfile(profile) {
        return this.profileUseCases.createProfile(profile);
    }
    getProfile(id) {
        return this.profileUseCases.getProfile(id);
    }
    getProfiles() {
        return this.profileUseCases.getProfiles();
    }
    updateProfile(id, profile) {
        return this.profileUseCases.updateProfile(id, profile);
    }
    deleteProfile(id) {
        return this.profileUseCases.deleteProfile(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new profile' }),
    (0, swagger_1.ApiBody)({ type: profile_dto_1.CreateProfileDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Profile created',
        schema: {
            example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a profile by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profile returned',
        schema: {
            example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' },
        },
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all profiles' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profiles list',
        schema: {
            example: [{ id: 1, user: 1, first_name: 'John', last_name: 'Doe' }],
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getProfiles", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a profile by id' }),
    (0, swagger_1.ApiBody)({ type: profile_dto_1.UpdateProfileDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Updated profile',
        schema: {
            example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' },
        },
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profile_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a profile by id' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Profile deleted' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteProfile", null);
ProfileController = __decorate([
    (0, common_1.Controller)('profiles'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [profile_usecases_1.ProfileUseCases])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map