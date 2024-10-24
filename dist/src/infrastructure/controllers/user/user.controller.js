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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../../../infrastructure/common/guards/jwtAuth.guard");
const user_usecases_1 = require("../../../usecases/user/user.usecases");
const user_dto_1 = require("./user.dto");
let UserController = class UserController {
    constructor(userUseCases) {
        this.userUseCases = userUseCases;
    }
    createUser(user) {
        return this.userUseCases.createUser(user);
    }
    getUser(id) {
        return this.userUseCases.getUser(id);
    }
    getUsers() {
        return this.userUseCases.getUsers();
    }
    updateUser(id, user) {
        return this.userUseCases.updateUser(id, user);
    }
    deleteUser(id) {
        return this.userUseCases.deleteUser(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [user_usecases_1.UserUseCases])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map