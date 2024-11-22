import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infrastructure/repository/repository.module';
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
    AuthorizationUseCases,
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
    AuthorizationUseCases,
  ],
})
export class UseCaseModule {}
