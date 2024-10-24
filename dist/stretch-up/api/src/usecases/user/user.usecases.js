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
exports.UserUseCases = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../infrastructure/repository/user.repository");
let UserUseCases = class UserUseCases {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(userModel) {
        return await this.userRepository.createUser(userModel);
    }
    async getUser(id) {
        const data = await this.userRepository.getUser(id);
        if (!data) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return { data };
    }
    async getUsers() {
        return await this.userRepository.getUsers();
    }
    async updateUser(id, userUpdateModel) {
        return await this.userRepository.updateUser(id, userUpdateModel);
    }
    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }
};
UserUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserUseCases);
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=user.usecases.js.map