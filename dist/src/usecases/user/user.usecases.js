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
const email_service_1 = require("../../infrastructure/services/emails/email.service");
let UserUseCases = class UserUseCases {
    constructor(userRepository, emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async getUserEmailByCode(code) {
        const userEmail = await this.userRepository.getUserByCode(code);
        if (!userEmail) {
            throw new common_1.HttpException('token expired', common_1.HttpStatus.BAD_REQUEST);
        }
        return userEmail;
    }
    async setUsersPassword(code, password) {
        const user = await this.userRepository.getUserByCode(code);
        const currentTime = new Date().getTime();
        const otpExpiryTime = new Date(user.signup_otp_expiry).getTime();
        if (user.signup_otp !== code || currentTime > otpExpiryTime) {
            throw new common_1.HttpException(`OTP is invalid or expired`, common_1.HttpStatus.BAD_REQUEST);
        }
        else {
            const updatedUser = await this.userRepository.updateUser(user.id, {
                password,
                signup_otp: null,
                signup_otp_expiry: null,
            });
            return updatedUser;
        }
    }
    async sendSignupCode(user) {
        try {
            const code = this.randomIntFromInterval(1000, 9999);
            const createdUser = await this.userRepository.updateUser(user.id, {
                signup_otp: code,
                signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000),
            });
            await this.emailService.sendUserConfirmation(user.email, '' + code);
            return createdUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async createUser(userModel) {
        return await this.userRepository.createUser(userModel);
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async forgotPassword(email) {
        try {
            const checkUser = await this.userRepository.getUserByEmail(email);
            if (!checkUser) {
                throw new common_1.HttpException('User does not Exists', common_1.HttpStatus.CONFLICT);
            }
            const code = this.randomIntFromInterval(1000, 9999);
            await this.userRepository.updateUser(checkUser.id, {
                signup_otp: code,
                signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000),
            });
            await this.emailService.forgotPasswordEmail(email, '' + code);
            return 'email sent successfully';
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async checkUser(userEmail) {
        return await this.userRepository.getUserByEmail(userEmail);
    }
    async createUserOnConfirmation(code, email) {
        const checkUser = await this.userRepository.getUserByEmail(email);
        if (!checkUser) {
            throw new common_1.HttpException(`User Doesn't  Exists`, common_1.HttpStatus.CONFLICT);
        }
        const currentTime = new Date().getTime();
        const otpExpiryTime = new Date(checkUser.signup_otp_expiry).getTime();
        if (checkUser.signup_otp !== code || currentTime > otpExpiryTime) {
            throw new common_1.HttpException(`OTP is invalid or expired`, common_1.HttpStatus.BAD_REQUEST);
        }
        const updateUser = await this.userRepository.updateUser(checkUser.id, {
            is_active: true,
            is_email_verified: true,
            signup_otp: null,
            signup_otp_expiry: null,
        });
        return updateUser;
    }
    async resendCodeEmail(userEmail) {
        try {
            const checkUser = await this.userRepository.getUserByEmail(userEmail);
            if (!checkUser) {
                throw new common_1.HttpException('User Not Exists', common_1.HttpStatus.CONFLICT);
            }
            const code = this.randomIntFromInterval(1000, 9999);
            await this.userRepository.updateUser(checkUser.id, {
                signup_otp: code,
                signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000),
            });
            await this.emailService.sendUserConfirmation(checkUser.email, '' + code);
            return checkUser;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, 500);
        }
    }
    async getUser(id) {
        const data = await this.userRepository.getUser(id);
        if (!data) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return data;
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
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        email_service_1.MailService])
], UserUseCases);
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=user.usecases.js.map