import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserModel, UpdateUserModel  } from '../../domain/models/user';
import { UserRepository } from '../../infrastructure/repository/user.repository';

@Injectable()
export class UserUseCases {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userModel: UserModel) {
    return await this.userRepository.createUser(userModel);
  }

  async getUser(id: number) {
    const data = await this.userRepository.getUser(id);
    if (!data) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getUsers() {
    return await this.userRepository.getUsers();
  }

  async updateUser(id: number, userUpdateModel: UpdateUserModel) {
    return await this.userRepository.updateUser(id, userUpdateModel);
  }

  async deleteUser(id: number) {
    return await this.userRepository.deleteUser(id);
  }
}
