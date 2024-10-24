import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RoutineModel, UpdateRoutineModel  } from '../../domain/models/routine';
import { RoutineRepository } from '../../infrastructure/repository/routine.repository';

@Injectable()
export class RoutineUseCases {
  constructor(private readonly routineRepository: RoutineRepository) {}

  async createRoutine(routineModel: RoutineModel) {
    return await this.routineRepository.createRoutine(routineModel);
  }

  async getRoutine(id: number) {
    const data = await this.routineRepository.getRoutine(id);
    if (!data) {
      throw new HttpException('Routine Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getRoutines() {
    return await this.routineRepository.getRoutines();
  }

  async updateRoutine(id: number, routineUpdateModel: UpdateRoutineModel) {
    return await this.routineRepository.updateRoutine(id, routineUpdateModel);
  }

  async deleteRoutine(id: number) {
    return await this.routineRepository.deleteRoutine(id);
  }
}
