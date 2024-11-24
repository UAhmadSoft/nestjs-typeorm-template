import { Module } from '@nestjs/common';
import { UserUseCases } from './user/user.usecases';
import { ProfileUseCases } from './profile/profile.usecases';
import { LoginUseCases } from './auth/login.usecases';
import { JwtTokenService } from 'src/infrastructure/services/jwt/jwt.service';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { LogoutUseCases } from './auth/logout.usecases';
import { IsAuthenticatedUseCases } from './auth/is-authenticated.usecases';
import { AuthorizationUseCases } from './auth/authorization.usecases';
import { EmailModule } from 'src/infrastructure/services/emails/email.module';
import { CoinUseCases } from './coin/coin.usecases';
import { ConvertHistoryUseCases } from './converthistory/converthistory.usecases';
import { DepositHistoryUseCases } from './deposithistory/deposithistory.usecases';
import { WithdrawHistoryUseCases } from './withdrawhistory/withdrawhistory.usecases';
import { TransferHistoryUseCases } from './transferhistory/transferhistory.usecases';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { WalletUseCases } from './wallet/wallet.usecases';
import { SpotUseCases } from './spot/spot.usecases';

@Module({
  imports: [RepositoryModule, EmailModule],
  providers: [
    UserUseCases,
    ProfileUseCases,
    LoginUseCases,
    JwtTokenService,
    EnvironmentConfigService,
    BcryptService,
    JwtService,
    LogoutUseCases,
    IsAuthenticatedUseCases,
    CoinUseCases,
    AuthorizationUseCases,
    ConvertHistoryUseCases,
    DepositHistoryUseCases,
    WithdrawHistoryUseCases,
    TransferHistoryUseCases,
    WalletUseCases,
    SpotUseCases,
  ],
  exports: [
    UserUseCases,
    ProfileUseCases,
    LoginUseCases,
    JwtTokenService,
    EnvironmentConfigService,
    BcryptService,
    JwtService,
    LogoutUseCases,
    IsAuthenticatedUseCases,
    CoinUseCases,
    AuthorizationUseCases,
    ConvertHistoryUseCases,
    DepositHistoryUseCases,
    WithdrawHistoryUseCases,
    TransferHistoryUseCases,
    WalletUseCases,
    SpotUseCases,
  ],
})
export class UseCaseModule {}
