"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const db_1 = require("../entities/db");
const bcrypt_service_1 = require("../services/bcrypt/bcrypt.service");
const user_repository_1 = require("./user.repository");
const device_repository_1 = require("./device.repository");
const exercise_repository_1 = require("./exercise.repository");
const profile_repository_1 = require("./profile.repository");
const routine_repository_1 = require("./routine.repository");
let RepositoryModule = class RepositoryModule {
};
RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature(db_1.default)],
        providers: [
            bcrypt_service_1.BcryptService,
            user_repository_1.UserRepository,
            device_repository_1.DeviceRepository,
            exercise_repository_1.ExerciseRepository,
            profile_repository_1.ProfileRepository,
            routine_repository_1.RoutineRepository,
        ],
        exports: [
            user_repository_1.UserRepository,
            device_repository_1.DeviceRepository,
            exercise_repository_1.ExerciseRepository,
            profile_repository_1.ProfileRepository,
            routine_repository_1.RoutineRepository,
        ],
    })
], RepositoryModule);
exports.RepositoryModule = RepositoryModule;
//# sourceMappingURL=repository.module.js.map