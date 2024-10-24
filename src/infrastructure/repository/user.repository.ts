import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel, FetchUserModel, UpdateUserModel  } from '../../domain/models/user';
import { IUser } from '../../domain/repositories/user.repository.interface';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserRepository implements IUser {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async createUser(userModel: UserModel): Promise<FetchUserModel> {
    return await this.userRepository.save(userModel);
  }

  async getUser(id: number): Promise<FetchUserModel> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUsers(): Promise<FetchUserModel[]> {
    return await this.userRepository.find();
  }

  async updateUser(
    id: number,
    updateUserModel: UpdateUserModel,
  ): Promise<FetchUserModel> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      const updatedUser = { ...user, ...updateUserModel };
      return this.userRepository.save(updatedUser);
    }
    return;
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('User Not Found');
    }

    return;
  }
}
