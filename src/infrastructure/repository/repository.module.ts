import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import db1Entities from '../entities/db';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { UserRepository } from './user.repository';
import { ProfileRepository } from './profile.repository';
import { CoinRepository } from './coin.repository';
import { ConvertHistoryRepository } from './converthistory.repository';
import { TransferHistoryRepository } from './transferhistory.repository';
import { WithdrawHistoryRepository } from './withdrawhistory.repository';
import { DepositHistoryRepository } from './deposithistory.repository';
import { WalletRepository } from './wallet.repository';
import { SpotRepository } from './spot.repository';

@Module({
  imports: [TypeOrmModule.forFeature(db1Entities)],
  providers: [
    BcryptService,
    UserRepository,
    ProfileRepository,
    CoinRepository,
    ConvertHistoryRepository,
    DepositHistoryRepository,
    WithdrawHistoryRepository,
    TransferHistoryRepository,
    WalletRepository,
    SpotRepository,
  ],
  exports: [
    UserRepository,
    ProfileRepository,
    CoinRepository,
    ConvertHistoryRepository,
    DepositHistoryRepository,
    WithdrawHistoryRepository,
    TransferHistoryRepository,
    WalletRepository,
    SpotRepository,
  ],
})
export class RepositoryModule {}
