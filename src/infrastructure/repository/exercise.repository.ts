import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExerciseModel, FetchExerciseModel, UpdateExerciseModel  } from '../../domain/models/exercise';
import { IExercise } from '../../domain/repositories/exercise.repository.interface';
import { Exercises } from '../entities/exercise.entity';

@Injectable()
export class ExerciseRepository implements IExercise {
  constructor(
    @InjectRepository(Exercises)
    private exerciseRepository: Repository<Exercises>,
  ) {}

  async createExercise(exerciseModel: ExerciseModel): Promise<FetchExerciseModel> {
    return await this.exerciseRepository.save(exerciseModel);
  }

  async getExercise(id: number): Promise<FetchExerciseModel> {
    return await this.exerciseRepository.findOne({ where: { id } });
  }

  async getExercises(): Promise<FetchExerciseModel[]> {
    return await this.exerciseRepository.find();
  }

  async updateExercise(
    id: number,
    updateExerciseModel: UpdateExerciseModel,
  ): Promise<FetchExerciseModel> {
    const exercise = await this.exerciseRepository.findOne({ where: { id } });
    if (exercise) {
      const updatedExercise = { ...exercise, ...updateExerciseModel };
      return this.exerciseRepository.save(updatedExercise);
    }
    return;
  }

  async deleteExercise(id: number): Promise<void> {
    const result = await this.exerciseRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('Exercise Not Found');
    }

    return;
  }
}
