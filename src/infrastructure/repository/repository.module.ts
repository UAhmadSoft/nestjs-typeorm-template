import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import db1Entities from '../entities/db';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { UserRepository } from './user.repository';
import { ProfileRepository } from './profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature(db1Entities)],
  providers: [BcryptService, UserRepository, ProfileRepository],
  exports: [UserRepository, ProfileRepository],
})
export class RepositoryModule {}
