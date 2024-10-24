import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import db1Entities from '../entities/db';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { UserRepository } from './user.repository';
import { DeviceRepository } from './device.repository';
import { ExerciseRepository } from './exercise.repository';
import { ProfileRepository } from './profile.repository';
import { RoutineRepository } from './routine.repository';

@Module({
  imports: [TypeOrmModule.forFeature(db1Entities)],
  providers: [
    BcryptService,
    UserRepository,
    DeviceRepository,
    ExerciseRepository,
    ProfileRepository,
    RoutineRepository,
  ],
  exports: [
    UserRepository,
    DeviceRepository,
    ExerciseRepository,
    ProfileRepository,
    RoutineRepository,
  ],
})
export class RepositoryModule {}
