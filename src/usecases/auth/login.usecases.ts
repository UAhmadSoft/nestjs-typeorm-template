import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { JwtTokenService } from 'src/infrastructure/services/jwt/jwt.service';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { IJwtServicePayload } from 'src/domain/adapters/jwt.interface';
import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { ProfileUseCases } from '../profile/profile.usecases';

@Injectable()
export class LoginUseCases {
  constructor(
    // private readonly logger: ILogger,
    private readonly jwtTokenService: JwtTokenService,
    private readonly jwtConfig: EnvironmentConfigService,
    private readonly userRepository: UserRepository,
    private readonly profileUsecases: ProfileUseCases,
    private readonly bcryptService: BcryptService,
  ) {}
  async getJwtToken(email: string) {
    const payload: IJwtServicePayload = { email };
    const secret = this.jwtConfig.getJwtSecret();
    const expiresIn = this.jwtConfig.getJwtExpirationTime() + 's';
    const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
    return token;
  }

  getCookieForAuthCheck() {
    const cookie = `AuthCheck=true; SameSite=None;  Secure=true; Path=/; Max-Age=${this.jwtConfig.getJwtRefreshExpirationTime()}`;
    return cookie;
  }
  async validateUserForLocalStragtegy(email: string, pass: string) {
    const user = await this.userRepository.getActiveUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException(`User with email ${email} not found`);
    }
    const match = await this.bcryptService.compare(pass, user.password);

    console.log('user', user);
    console.log('match', match);
    if (user && match) {
      const { password, ...result } = user;
      console.log('user', user);
      return result;
    }
    throw new UnauthorizedException('Wrong password');
  }
  async validateEmailForLocalStragtegy(email: string) {
    const user = await this.userRepository.getActiveUserByEmail(email);
    if (!user) {
      return null;
    }
    return user;
  }
  async validateUserForJWTStragtegy(email: string) {
    const verifEmail = await this.userRepository.getActiveUserByEmail(email);
    if (!verifEmail) {
      return null;
    }
    const user = await this.userRepository.getActiveUserByEmail(email);
    if (!user) {
      return null;
    }
    return user;
  }
}
