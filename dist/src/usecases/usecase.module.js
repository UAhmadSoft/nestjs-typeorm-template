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
const userpreference_usecases_1 = require("./userpreference/userpreference.usecases");
const userpreferencesresponse_usecases_1 = require("./userpreferencesresponse/userpreferencesresponse.usecases");
const support_usecases_1 = require("./support/support.usecases");
const login_usecases_1 = require("./auth/login.usecases");
const jwt_service_1 = require("../infrastructure/services/jwt/jwt.service");
const environment_config_service_1 = require("../infrastructure/config/environment-config/environment-config.service");
const bcrypt_service_1 = require("../infrastructure/services/bcrypt/bcrypt.service");
const jwt_1 = require("@nestjs/jwt");
const logout_usecases_1 = require("./auth/logout.usecases");
const is_authenticated_usecases_1 = require("./auth/is-authenticated.usecases");
const authorization_usecases_1 = require("./auth/authorization.usecases");
const email_module_1 = require("../infrastructure/services/emails/email.module");
let UseCaseModule = class UseCaseModule {
};
UseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [repository_module_1.RepositoryModule, email_module_1.EmailModule],
        providers: [
            user_usecases_1.UserUseCases,
            device_usecases_1.DeviceUseCases,
            exercise_usecases_1.ExerciseUseCases,
            profile_usecases_1.ProfileUseCases,
            routine_usecases_1.RoutineUseCases,
            userpreference_usecases_1.UserPreferenceUseCases,
            userpreferencesresponse_usecases_1.UserPreferencesResponseUseCases,
            support_usecases_1.SupportUseCases,
            login_usecases_1.LoginUseCases,
            jwt_service_1.JwtTokenService,
            environment_config_service_1.EnvironmentConfigService,
            bcrypt_service_1.BcryptService,
            jwt_1.JwtService,
            logout_usecases_1.LogoutUseCases,
            is_authenticated_usecases_1.IsAuthenticatedUseCases,
            authorization_usecases_1.AuthorizationUseCases,
        ],
        exports: [
            user_usecases_1.UserUseCases,
            device_usecases_1.DeviceUseCases,
            exercise_usecases_1.ExerciseUseCases,
            profile_usecases_1.ProfileUseCases,
            routine_usecases_1.RoutineUseCases,
            userpreference_usecases_1.UserPreferenceUseCases,
            userpreferencesresponse_usecases_1.UserPreferencesResponseUseCases,
            support_usecases_1.SupportUseCases,
            login_usecases_1.LoginUseCases,
            jwt_service_1.JwtTokenService,
            environment_config_service_1.EnvironmentConfigService,
            bcrypt_service_1.BcryptService,
            jwt_1.JwtService,
            logout_usecases_1.LogoutUseCases,
            is_authenticated_usecases_1.IsAuthenticatedUseCases,
            authorization_usecases_1.AuthorizationUseCases,
        ],
    })
], UseCaseModule);
exports.UseCaseModule = UseCaseModule;
//# sourceMappingURL=usecase.module.js.map