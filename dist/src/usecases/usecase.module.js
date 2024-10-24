"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const repository_module_1 = require("../infrastructure/repository/repository.module");
const user_usecases_1 = require("./user/user.usecases");
const device_usecases_1 = require("./device/device.usecases");
const exercise_usecases_1 = require("./exercise/exercise.usecases");
const profile_usecases_1 = require("./profile/profile.usecases");
const routine_usecases_1 = require("./routine/routine.usecases");
let UseCaseModule = class UseCaseModule {
};
UseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [repository_module_1.RepositoryModule],
        providers: [
            user_usecases_1.UserUseCases,
            device_usecases_1.DeviceUseCases,
            exercise_usecases_1.ExerciseUseCases,
            profile_usecases_1.ProfileUseCases,
            routine_usecases_1.RoutineUseCases,
        ],
        exports: [
            user_usecases_1.UserUseCases,
            device_usecases_1.DeviceUseCases,
            exercise_usecases_1.ExerciseUseCases,
            profile_usecases_1.ProfileUseCases,
            routine_usecases_1.RoutineUseCases,
        ],
    })
], UseCaseModule);
exports.UseCaseModule = UseCaseModule;
//# sourceMappingURL=usecase.module.js.map