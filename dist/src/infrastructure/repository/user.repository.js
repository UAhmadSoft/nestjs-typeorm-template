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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserRepository = class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(userModel) {
        return await this.userRepository.save(Object.assign(Object.assign({}, userModel), { email: userModel.email.toLowerCase() }));
    }
    async getUser(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async getUsersCount() {
        return await this.userRepository.count();
    }
    async getUsers(queryParams) {
        const findObject = {
            relations: ['profile'],
        };
        if (queryParams.search) {
            findObject.where = {
                profile: {
                    fullname: (0, typeorm_2.ILike)(`%${queryParams.search}%`),
                },
            };
        }
        const total_count = await this.userRepository.count(findObject);
        if (queryParams.page && queryParams.limit) {
            const page = queryParams.page * 1 || 1;
            const limit = queryParams.limit * 1 || 100;
            const skip = (page - 1) * limit;
            findObject['take'] = limit;
            findObject['skip'] = skip;
        }
        console.log('findObject', findObject);
        const users = await this.userRepository.find(findObject);
        return {
            total_count,
            users,
        };
    }
    async updateUser(id, updateUserModel) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (user) {
            const updatedUser = Object.assign(Object.assign({}, user), updateUserModel);
            return this.userRepository.save(updatedUser);
        }
        return;
    }
    async deleteUser(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('User Not Found');
        }
        return;
    }
    async getActiveUserByEmail(email) {
        const adminUserEntity = await this.userRepository.findOne({
            where: {
                email: email.toLowerCase(),
                is_active: true,
            },
            relations: ['profile'],
        });
        if (!adminUserEntity) {
            return null;
        }
        return adminUserEntity;
    }
    async getUserByEmail(email) {
        const adminUserEntity = await this.userRepository.findOne({
            where: {
                email: email.toLowerCase(),
            },
        });
        if (!adminUserEntity) {
            return null;
        }
        return adminUserEntity;
    }
    async getUserByCode(code) {
        const adminUserEntity = await this.userRepository.findOne({
            where: {
                signup_otp: code,
            },
        });
        if (!adminUserEntity) {
            return null;
        }
        return adminUserEntity;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map