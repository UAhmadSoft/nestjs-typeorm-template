import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  SupportModel,
  FetchSupportModel,
  UpdateSupportModel,
} from '../../domain/models/support';
import { ISupport } from '../../domain/repositories/support.repository.interface';
import { Supports } from '../entities/support.entity';

@Injectable()
export class SupportRepository implements ISupport {
  constructor(
    @InjectRepository(Supports)
    private supportRepository: Repository<Supports>,
  ) {}

  async createSupport(supportModel: SupportModel): Promise<FetchSupportModel> {
    return await this.supportRepository.save(supportModel);
  }

  async getSupport(id: number): Promise<FetchSupportModel> {
    return await this.supportRepository.findOne({ where: { id } });
  }

  async getSupports(): Promise<FetchSupportModel[]> {
    return await this.supportRepository.find();
  }

  async updateSupport(
    id: number,
    updateSupportModel: UpdateSupportModel,
  ): Promise<FetchSupportModel> {
    const support = await this.supportRepository.findOne({ where: { id } });
    if (support) {
      const updatedSupport = { ...support, ...updateSupportModel };
      return this.supportRepository.save(updatedSupport);
    }
    return;
  }

  async deleteSupport(id: number): Promise<void> {
    const result = await this.supportRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Support Not Found');
    }

    return;
  }
}
