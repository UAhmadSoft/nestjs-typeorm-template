import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
import { UserUseCases } from './user/user.usecases';
import { DeviceUseCases } from './device/device.usecases';
import { ExerciseUseCases } from './exercise/exercise.usecases';
import { ProfileUseCases } from './profile/profile.usecases';
import { RoutineUseCases } from './routine/routine.usecases';

@Module({
  imports: [RepositoryModule],
  providers: [
    UserUseCases,
    DeviceUseCases,
    ExerciseUseCases,
    ProfileUseCases,
    RoutineUseCases,
  ],
  exports: [
    UserUseCases,
    DeviceUseCases,
    ExerciseUseCases,
    ProfileUseCases,
    RoutineUseCases,
  ],
})
export class UseCaseModule {}
