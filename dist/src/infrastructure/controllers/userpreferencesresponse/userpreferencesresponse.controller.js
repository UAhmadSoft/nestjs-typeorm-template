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
exports.UserPreferencesResponseController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const userpreferencesresponse_usecases_1 = require("../../../usecases/userpreferencesresponse/userpreferencesresponse.usecases");
const userpreferencesresponse_dto_1 = require("./userpreferencesresponse.dto");
let UserPreferencesResponseController = class UserPreferencesResponseController {
    constructor(userPreferencesResponseUseCases) {
        this.userPreferencesResponseUseCases = userPreferencesResponseUseCases;
    }
    createUserPreferencesResponse(userPreferencesResponse) {
        return this.userPreferencesResponseUseCases.createUserPreferencesResponse(userPreferencesResponse);
    }
    getUserPreferencesResponse(id) {
        return this.userPreferencesResponseUseCases.getUserPreferencesResponse(id);
    }
    getUserPreferencesResponses() {
        return this.userPreferencesResponseUseCases.getUserPreferencesResponses();
    }
    updateUserPreferencesResponse(id, userPreferencesResponse) {
        return this.userPreferencesResponseUseCases.updateUserPreferencesResponse(id, userPreferencesResponse);
    }
    deleteUserPreferencesResponse(id) {
        return this.userPreferencesResponseUseCases.deleteUserPreferencesResponse(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userpreferencesresponse_dto_1.CreateUserPreferencesResponseDto]),
    __metadata("design:returntype", void 0)
], UserPreferencesResponseController.prototype, "createUserPreferencesResponse", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserPreferencesResponseController.prototype, "getUserPreferencesResponse", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPreferencesResponseController.prototype, "getUserPreferencesResponses", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, userpreferencesresponse_dto_1.UpdateUserPreferencesResponseDto]),
    __metadata("design:returntype", void 0)
], UserPreferencesResponseController.prototype, "updateUserPreferencesResponse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserPreferencesResponseController.prototype, "deleteUserPreferencesResponse", null);
UserPreferencesResponseController = __decorate([
    (0, common_1.Controller)('userpreferencesresponses'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [userpreferencesresponse_usecases_1.UserPreferencesResponseUseCases])
], UserPreferencesResponseController);
exports.UserPreferencesResponseController = UserPreferencesResponseController;
//# sourceMappingURL=userpreferencesresponse.controller.js.map