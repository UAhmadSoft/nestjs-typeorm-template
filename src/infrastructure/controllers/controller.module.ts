import { diskStorage } from 'multer';
import { Module } from '@nestjs/common';

import { MyLogger } from '../common/logger/myLogger';
import { MulterModule } from '@nestjs/platform-express';
import { EmailModule } from 'src/infrastructure/services/emails/email.module';
import { UseCaseModule } from 'src/usecases/usecase.module';
import { UserController } from './user/user.controller';
import { ProfileController } from './profile/profile.controller';
import { AuthController } from './auth/auth.controller';
import { CoinController } from './coin/coin.controller';
import { ConvertHistoryController } from './converthistory/converthistory.controller';
import { DepositHistoryController } from './deposithistory/deposithistory.controller';
import { WithdrawHistoryController } from './withdrawhistory/withdrawhistory.controller';
import { TransferHistoryController } from './transferhistory/transferhistory.controller';
import { WalletController } from './wallet/wallet.controller';
import { SpotController } from './spot/spot.controller';

@Module({
  imports: [
    UseCaseModule,
    MulterModule.register({
      storage: diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads');
        },
        filename: function (req, file, cb) {
          if (
            !(
              file.mimetype == 'image/png' ||
              file.mimetype == 'image/jpg' ||
              file.mimetype == 'image/jpeg'
            )
          ) {
            return cb(new Error('Filetype must be png,jpg or jpeg'), '');
          }

          const filename =
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '-' +
            file.originalname;
          cb(null, filename);
        },
      }),
      // dest: './uploads',
    }),
    EmailModule,
  ],
  controllers: [
    AuthController,
    UserController,
    ProfileController,
    CoinController,
    ConvertHistoryController,
    DepositHistoryController,
    WithdrawHistoryController,
    TransferHistoryController,
    WalletController,
    SpotController,
  ],
  providers: [MyLogger, EmailModule],
})
export class ControllerModule {}
