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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCases = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../infrastructure/services/jwt/jwt.service");
const environment_config_service_1 = require("../../infrastructure/config/environment-config/environment-config.service");
const bcrypt_service_1 = require("../../infrastructure/services/bcrypt/bcrypt.service");
const user_repository_1 = require("../../infrastructure/repository/user.repository");
const profile_usecases_1 = require("../profile/profile.usecases");
let LoginUseCases = class LoginUseCases {
    constructor(jwtTokenService, jwtConfig, userRepository, profileUsecases, bcryptService) {
        this.jwtTokenService = jwtTokenService;
        this.jwtConfig = jwtConfig;
        this.userRepository = userRepository;
        this.profileUsecases = profileUsecases;
        this.bcryptService = bcryptService;
    }
    async getJwtToken(email) {
        const payload = { email };
        const secret = this.jwtConfig.getJwtSecret();
        const expiresIn = this.jwtConfig.getJwtExpirationTime() + 's';
        const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
        return token;
    }
    getCookieForAuthCheck() {
        const cookie = `AuthCheck=true; SameSite=None;  Secure=true; Path=/; Max-Age=${this.jwtConfig.getJwtRefreshExpirationTime()}`;
        return cookie;
    }
    async validateUserForLocalStragtegy(email, pass) {
        const user = await this.userRepository.getActiveUserByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException(`User with email ${email} not found`);
        }
        const match = await this.bcryptService.compare(pass, user.password);
        console.log('user', user);
        console.log('match', match);
        if (user && match) {
            const { password } = user, result = __rest(user, ["password"]);
            console.log('user', user);
            return result;
        }
        throw new common_1.UnauthorizedException('Wrong password');
    }
    async validateEmailForLocalStragtegy(email) {
        const user = await this.userRepository.getActiveUserByEmail(email);
        if (!user) {
            return null;
        }
        return user;
    }
    async validateUserForJWTStragtegy(email) {
        const verifEmail = await this.userRepository.getActiveUserByEmail(email);
        if (!verifEmail) {
            return null;
        }
        const user = await this.userRepository.getActiveUserByEmail(email);
        if (!user) {
            return null;
        }
        return user;
    }
};
LoginUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.JwtTokenService,
        environment_config_service_1.EnvironmentConfigService,
        user_repository_1.UserRepository,
        profile_usecases_1.ProfileUseCases,
        bcrypt_service_1.BcryptService])
], LoginUseCases);
exports.LoginUseCases = LoginUseCases;
//# sourceMappingURL=login.usecases.js.map