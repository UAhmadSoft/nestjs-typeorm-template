import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SupportModel, UpdateSupportModel  } from '../../domain/models/support';
import { SupportRepository } from '../../infrastructure/repository/support.repository';

@Injectable()
export class SupportUseCases {
  constructor(private readonly supportRepository: SupportRepository) {}

  async createSupport(supportModel: SupportModel) {
    return await this.supportRepository.createSupport(supportModel);
  }

  async getSupport(id: number) {
    const data = await this.supportRepository.getSupport(id);
    if (!data) {
      throw new HttpException('Support Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getSupports() {
    return await this.supportRepository.getSupports();
  }

  async updateSupport(id: number, supportUpdateModel: UpdateSupportModel) {
    return await this.supportRepository.updateSupport(id, supportUpdateModel);
  }

  async deleteSupport(id: number) {
    return await this.supportRepository.deleteSupport(id);
  }
}
