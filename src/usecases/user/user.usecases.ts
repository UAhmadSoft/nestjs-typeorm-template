import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  UserModel,
  UpdateUserModel,
  FetchUserModel,
} from '../../domain/models/user.model';
import { UserRepository } from '../../infrastructure/repository/user.repository';
import { EntityManager } from 'typeorm';
import { MailService } from 'src/infrastructure/services/emails/email.service';

@Injectable()
export class UserUseCases {
  constructor(
    private readonly userRepository: UserRepository,
    private emailService: MailService,
  ) {}

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async getUserEmailByCode(code: number) {
    const userEmail: any = await this.userRepository.getUserByCode(code);
    if (!userEmail) {
      throw new HttpException('token expired', HttpStatus.BAD_REQUEST);
    }
    return userEmail;
  }

  async setUsersPassword(code: number, password: string) {
    const user = await this.userRepository.getUserByCode(code);
    const currentTime = new Date().getTime();
    const otpExpiryTime = new Date(user.signup_otp_expiry).getTime();
    // Check if OTP is correct and not expired
    if (user.signup_otp !== code || currentTime > otpExpiryTime) {
      throw new HttpException(
        `OTP is invalid or expired`,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const updatedUser = await this.userRepository.updateUser(user.id, {
        password,
        signup_otp: null,
        signup_otp_expiry: null,
      });
      return updatedUser;
    }
  }

  async sendSignupCode(user: FetchUserModel) {
    try {
      const code = this.randomIntFromInterval(1000, 9999);
      const createdUser = await this.userRepository.updateUser(user.id, {
        signup_otp: code,
        signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000), // 5min expiry
      });

      await this.emailService.sendUserConfirmation(user.email, '' + code);
      return createdUser;
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async createUser(userModel: UserModel) {
    return await this.userRepository.createUser(userModel);
  }

  async getMe(userEmail: string) {
    return await this.userRepository.getActiveUserByEmail(userEmail);
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async forgotPassword(email: string) {
    try {
      const checkUser = await this.userRepository.getUserByEmail(email);
      if (!checkUser) {
        throw new HttpException('User does not Exists', HttpStatus.CONFLICT);
      }

      const code = this.randomIntFromInterval(1000, 9999);
      await this.userRepository.updateUser(checkUser.id, {
        signup_otp: code,
        signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000), // 5min expiry
      });
      await this.emailService.forgotPasswordEmail(email, '' + code);
      return 'email sent successfully';
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async checkUser(userEmail) {
    return await this.userRepository.getUserByEmail(userEmail);
  }

  async createUserOnConfirmation(code: number, email: string) {
    const checkUser = await this.userRepository.getUserByEmail(email);
    if (!checkUser) {
      throw new HttpException(`User Doesn't  Exists`, HttpStatus.CONFLICT);
    }
    // Step 2: Verify OTP
    const currentTime = new Date().getTime();
    const otpExpiryTime = new Date(checkUser.signup_otp_expiry).getTime();

    // Check if OTP is correct and not expired
    if (checkUser.signup_otp !== code || currentTime > otpExpiryTime) {
      throw new HttpException(
        `OTP is invalid or expired`,
        HttpStatus.BAD_REQUEST,
      );
    }

    // Step 3: Update user - mark email as verified and clear OTP + expiry
    let updateUser: any = await this.userRepository.updateUser(checkUser.id, {
      is_active: true,
      is_email_verified: true, // Mark email as verified
      signup_otp: null, // Clear OTP
      signup_otp_expiry: null, // Clear OTP expiry
    });

    updateUser = await this.userRepository.getActiveUserByEmail(email);
    return updateUser;
  }

  async resendCodeEmail(userEmail: string) {
    try {
      const checkUser = await this.userRepository.getUserByEmail(userEmail);

      if (!checkUser) {
        throw new HttpException('User Not Exists', HttpStatus.CONFLICT);
      }
      const code = this.randomIntFromInterval(1000, 9999);
      await this.userRepository.updateUser(checkUser.id, {
        signup_otp: code,
        signup_otp_expiry: new Date(Date.now() + 60 * 5 * 1000), // 5min expiry
      });
      await this.emailService.sendUserConfirmation(checkUser.email, '' + code);
      return checkUser;
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async getUser(id: number) {
    const data = await this.userRepository.getUser(id);
    if (!data) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return data;
  }

  async getUsers(queryParams = {}) {
    return await this.userRepository.getUsers(queryParams);
  }

  async updateUser(id: number, userUpdateModel: UpdateUserModel) {
    return await this.userRepository.updateUser(id, userUpdateModel);
  }

  async deleteUser(id: number) {
    return await this.userRepository.deleteUser(id);
  }
}
