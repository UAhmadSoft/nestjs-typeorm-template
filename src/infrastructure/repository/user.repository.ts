import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import {
  UserModel,
  FetchUserModel,
  UpdateUserModel,
} from '../../domain/models/user';
import { IUser } from '../../domain/repositories/user.repository.interface';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserRepository implements IUser {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async createUser(userModel: UserModel): Promise<FetchUserModel> {
    return await this.userRepository.save({
      ...userModel,
      email: userModel.email.toLowerCase(),
    });
  }

  async getUser(id: number): Promise<FetchUserModel> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUsersCount(): Promise<number> {
    return await this.userRepository.count();
  }

  async getUsers(queryParams: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<{
    total_count: number;
    users: FetchUserModel[];
  }> {
    const findObject: any = {
      relations: ['profile'],
    };

    if (queryParams.search) {
      findObject.where = {
        profile: {
          fullname: ILike(`%${queryParams.search}%`),
        },
      };
    }

    const total_count = await this.userRepository.count(findObject);

    if (queryParams.page && queryParams.limit) {
      const page = queryParams.page * 1 || 1;
      const limit = queryParams.limit * 1 || 100;
      const skip = (page - 1) * limit;

      findObject['take'] = limit;
      findObject['skip'] = skip;
    }

    console.log('findObject', findObject);
    const users = await this.userRepository.find(findObject);

    return {
      total_count,
      users,
    };
  }

  async updateUser(
    id: number,
    updateUserModel: UpdateUserModel,
  ): Promise<FetchUserModel> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      const updatedUser = { ...user, ...updateUserModel };
      return this.userRepository.save(updatedUser as any);
    }
    return;
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User Not Found');
    }

    return;
  }

  async getActiveUserByEmail(email: string): Promise<UserModel> {
    const adminUserEntity = await this.userRepository.findOne({
      where: {
        email: email.toLowerCase(),
        is_active: true,
      },
      relations: ['profile'],
    });
    if (!adminUserEntity) {
      return null;
    }
    return adminUserEntity;
  }
  async getUserByEmail(email: string): Promise<FetchUserModel> {
    const adminUserEntity = await this.userRepository.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return adminUserEntity;
  }

  async getUserByCode(code: number): Promise<FetchUserModel> {
    const adminUserEntity = await this.userRepository.findOne({
      where: {
        signup_otp: code,
      },
    });
    if (!adminUserEntity) {
      return null;
    }
    return adminUserEntity;
  }
}
