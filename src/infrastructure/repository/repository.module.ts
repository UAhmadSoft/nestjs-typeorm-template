import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import db1Entities from '../entities/db';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { UserRepository } from './user.repository';
import { DeviceRepository } from './device.repository';
import { ExerciseRepository } from './exercise.repository';
import { ProfileRepository } from './profile.repository';
import { RoutineRepository } from './routine.repository';
import { SupportRepository } from './support.repository';
import { UserPreferenceRepository } from './userpreference.repository';
import { UserPreferencesResponseRepository } from './userpreferencesresponse.repository';

@Module({
  imports: [TypeOrmModule.forFeature(db1Entities)],
  providers: [
    BcryptService,
    UserRepository,
    DeviceRepository,
    ExerciseRepository,
    ProfileRepository,
    RoutineRepository,
    UserPreferenceRepository,
    UserPreferencesResponseRepository,
    SupportRepository,
  ],
  exports: [
    UserRepository,
    DeviceRepository,
    ExerciseRepository,
    ProfileRepository,
    RoutineRepository,
    UserPreferenceRepository,
    UserPreferencesResponseRepository,
    SupportRepository,
  ],
})
export class RepositoryModule {}
