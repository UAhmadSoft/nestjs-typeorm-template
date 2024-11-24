"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerModule = void 0;
const multer_1 = require("multer");
const common_1 = require("@nestjs/common");
const myLogger_1 = require("../common/logger/myLogger");
const platform_express_1 = require("@nestjs/platform-express");
const email_module_1 = require("../services/emails/email.module");
const usecase_module_1 = require("../../usecases/usecase.module");
const user_controller_1 = require("./user/user.controller");
const profile_controller_1 = require("./profile/profile.controller");
const auth_controller_1 = require("./auth/auth.controller");
const coin_controller_1 = require("./coin/coin.controller");
const converthistory_controller_1 = require("./converthistory/converthistory.controller");
const deposithistory_controller_1 = require("./deposithistory/deposithistory.controller");
const withdrawhistory_controller_1 = require("./withdrawhistory/withdrawhistory.controller");
const transferhistory_controller_1 = require("./transferhistory/transferhistory.controller");
const wallet_controller_1 = require("./wallet/wallet.controller");
const spot_controller_1 = require("./spot/spot.controller");
let ControllerModule = class ControllerModule {
};
ControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usecase_module_1.UseCaseModule,
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: function (req, file, cb) {
                        cb(null, 'uploads');
                    },
                    filename: function (req, file, cb) {
                        if (!(file.mimetype == 'image/png' ||
                            file.mimetype == 'image/jpg' ||
                            file.mimetype == 'image/jpeg')) {
                            return cb(new Error('Filetype must be png,jpg or jpeg'), '');
                        }
                        const filename = Date.now() +
                            '-' +
                            Math.round(Math.random() * 1e9) +
                            '-' +
                            file.originalname;
                        cb(null, filename);
                    },
                }),
            }),
            email_module_1.EmailModule,
        ],
        controllers: [
            auth_controller_1.AuthController,
            user_controller_1.UserController,
            profile_controller_1.ProfileController,
            coin_controller_1.CoinController,
            converthistory_controller_1.ConvertHistoryController,
            deposithistory_controller_1.DepositHistoryController,
            withdrawhistory_controller_1.WithdrawHistoryController,
            transferhistory_controller_1.TransferHistoryController,
            wallet_controller_1.WalletController,
            spot_controller_1.SpotController,
        ],
        providers: [myLogger_1.MyLogger, email_module_1.EmailModule],
    })
], ControllerModule);
exports.ControllerModule = ControllerModule;
//# sourceMappingURL=controller.module.js.map