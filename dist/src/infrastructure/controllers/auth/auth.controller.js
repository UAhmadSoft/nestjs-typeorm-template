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
exports.AuthController = void 0;
const profile_usecases_1 = require("../../../usecases/profile/profile.usecases");
const bcrypt_service_1 = require("./../../services/bcrypt/bcrypt.service");
const user_data_1 = require("../../common/user.data");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_dto_1 = require("./dtos/auth.dto");
const auth_presenter_1 = require("./auth.presenter");
const jwtAuth_guard_1 = require("../../common/guards/jwtAuth.guard");
const login_guard_1 = require("../../common/guards/login.guard");
const login_usecases_1 = require("../../../usecases/auth/login.usecases");
const user_usecases_1 = require("../../../usecases/user/user.usecases");
const catch_async_1 = require("../../../utils/catch-async");
let AuthController = class AuthController {
    constructor(loginUsecaseProxy, userUseCases, profileUseCases, bcryptService) {
        this.loginUsecaseProxy = loginUsecaseProxy;
        this.userUseCases = userUseCases;
        this.profileUseCases = profileUseCases;
        this.bcryptService = bcryptService;
    }
    async login(auth, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            var _a;
            let user = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.user) || req.user;
            if (user.is_banned) {
                throw new common_1.ForbiddenException('You are banned from the platform');
            }
            const accessTokenCookie = await this.loginUsecaseProxy.getJwtToken(auth.email);
            return res.json({
                user,
                authentication: accessTokenCookie,
            });
        })(req, res, next);
    }
    async googleLogin(auth, res) {
        let user = await this.userUseCases.checkUser(auth.email);
        if (!user) {
            user = await this.userUseCases.createUser({
                email: auth.email,
                password: `${Math.random() * 131312}`,
                is_social_login: true,
                is_active: true,
            });
        }
        else {
            if (!user.is_social_login) {
                throw new common_1.UnauthorizedException('Please login with your password');
            }
        }
        const accessTokenCookie = await this.loginUsecaseProxy.getJwtToken(user.email);
        return res.json({
            user: user,
            authentication: accessTokenCookie,
        });
    }
    async SignUp(auth, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            try {
                const hasPassword = await this.bcryptService.hash(auth.password);
                const user = await this.userUseCases.createUser(Object.assign(Object.assign({}, auth), { password: hasPassword }));
                await this.profileUseCases.createProfile({
                    user: user.id,
                    fullname: auth.fullname,
                });
                await this.userUseCases.sendSignupCode(user);
                if (user) {
                    return res.json({
                        status: 'success',
                        message: 'Otp is Sent to your email ,please verify your email ',
                    });
                }
                else {
                    throw new common_1.HttpException('Could not create new user', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            catch (e) {
                throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        })(req, res, next);
    }
    async ConfirmUserSignUp(user, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            const User = await this.userUseCases.createUserOnConfirmation(user.code, user.email);
            if (User) {
                const accessTokenCookie = await this.loginUsecaseProxy.getJwtToken(user.email);
                return res.json({
                    user: User,
                    token: accessTokenCookie,
                });
            }
            else {
                throw new common_1.HttpException('Could not create new user', common_1.HttpStatus.BAD_REQUEST);
            }
        })(req, res, next);
    }
    async ResendCode(auth, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            const code = await this.userUseCases.resendCodeEmail(auth.email);
            if (code) {
                return res.json({
                    status: 'success',
                    message: 'Email sent with code for confirmation',
                });
            }
            else {
                throw new common_1.HttpException('Could not create new user', common_1.HttpStatus.BAD_REQUEST);
            }
        })(req, res, next);
    }
    async forgotPassword(forgotDto, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            let str = await this.userUseCases.forgotPassword(forgotDto.email);
            return res.json({
                message: str,
            });
        })(req, res, next);
    }
    async setPassword(code, body, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            const hashedPassword = await this.bcryptService.hash(body.password);
            const result = await this.userUseCases.setUsersPassword(code, hashedPassword);
            if (result) {
                return res.json({
                    status: 'success',
                    message: 'Password Updated successfully',
                });
            }
            else {
                throw new common_1.HttpException('Could not Set Password. Please try again', common_1.HttpStatus.BAD_REQUEST);
            }
        })(req, res, next);
    }
    async resetPassword(body, code, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            const userEmail = await this.userUseCases.getUserEmailByCode(code);
            const user = await this.userUseCases.getUserByEmail(userEmail);
            const updatedUser = await this.userUseCases.updateUser(user.id, {
                password: body.password,
            });
            return res.json(updatedUser);
        })(req, res, next);
    }
    async updatePassword(user, req, res, next) {
        return await (0, catch_async_1.catchAsync)(async (req, res) => {
            const loggedInUser = await this.userUseCases.getUser(user_data_1.UserData.getUserData().id);
            console.log('loggedInUser :>> ', loggedInUser);
            const match = await this.bcryptService.compare(user.currentPassword, loggedInUser.password);
            if (!match)
                throw new common_1.UnauthorizedException('Invalid password match');
            const updatedUser = await this.userUseCases.updateUser(loggedInUser.id, {
                password: user.newPassword,
            });
            return res.json(updatedUser);
        })(req, res, next);
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(login_guard_1.LoginGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_1.AuthLoginDto }),
    (0, swagger_1.ApiOperation)({ description: 'login' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthLoginDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('google-login'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_1.AuthGoogleDto }),
    (0, swagger_1.ApiOperation)({ description: 'google-login' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthGoogleDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleLogin", null);
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_1.AuthSignUpDto }),
    (0, swagger_1.ApiOperation)({ description: 'sign up' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignUpDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "SignUp", null);
__decorate([
    (0, common_1.Post)('confirm-signup'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_1.AuthConfirmSignUpDto }),
    (0, swagger_1.ApiOperation)({ description: 'confirm sign up' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthConfirmSignUpDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ConfirmUserSignUp", null);
__decorate([
    (0, common_1.Post)('resend-code-email'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: auth_dto_1.ResendCodeDto }),
    (0, swagger_1.ApiOperation)({ description: 'sign up' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResendCodeDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ResendCode", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiOperation)({ description: 'forgot-password' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgotPasswordDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Put)('set-password/:code'),
    __param(0, (0, common_1.Param)('code', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Response)()),
    __param(4, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, auth_dto_1.SetPasswordDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "setPassword", null);
__decorate([
    (0, common_1.Patch)('reset-password/:code'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('code')),
    __param(2, (0, common_1.Request)()),
    __param(3, (0, common_1.Response)()),
    __param(4, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPasswordDto, Number, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('update-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UpdatePasswordDto, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatePassword", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('auth'),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'No authorization token was found',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(auth_presenter_1.IsAuthPresenter),
    __metadata("design:paramtypes", [login_usecases_1.LoginUseCases,
        user_usecases_1.UserUseCases,
        profile_usecases_1.ProfileUseCases,
        bcrypt_service_1.BcryptService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map