import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  RoutineModel,
  FetchRoutineModel,
  UpdateRoutineModel,
} from '../../domain/models/routine';
import { IRoutine } from '../../domain/repositories/routine.repository.interface';
import { Routines } from '../entities/routine.entity';

@Injectable()
export class RoutineRepository implements IRoutine {
  constructor(
    @InjectRepository(Routines)
    private routineRepository: Repository<Routines>,
  ) {}

  async createRoutine(routineModel: RoutineModel): Promise<FetchRoutineModel> {
    return await this.routineRepository.save(routineModel as any);
  }

  async getRoutine(id: number): Promise<FetchRoutineModel> {
    return await this.routineRepository.findOne({ where: { id } });
  }

  async getRoutines(): Promise<FetchRoutineModel[]> {
    return await this.routineRepository.find();
  }

  async updateRoutine(
    id: number,
    updateRoutineModel: UpdateRoutineModel,
  ): Promise<FetchRoutineModel> {
    const routine = await this.routineRepository.findOne({ where: { id } });
    if (routine) {
      const updatedRoutine = { ...routine, ...updateRoutineModel };
      return this.routineRepository.save(updatedRoutine as any);
    }
    return;
  }

  async deleteRoutine(id: number): Promise<void> {
    const result = await this.routineRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Routine Not Found');
    }

    return;
  }
}
