import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ExerciseModel, UpdateExerciseModel  } from '../../domain/models/exercise';
import { ExerciseRepository } from '../../infrastructure/repository/exercise.repository';

@Injectable()
export class ExerciseUseCases {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async createExercise(exerciseModel: ExerciseModel) {
    return await this.exerciseRepository.createExercise(exerciseModel);
  }

  async getExercise(id: number) {
    const data = await this.exerciseRepository.getExercise(id);
    if (!data) {
      throw new HttpException('Exercise Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getExercises() {
    return await this.exerciseRepository.getExercises();
  }

  async updateExercise(id: number, exerciseUpdateModel: UpdateExerciseModel) {
    return await this.exerciseRepository.updateExercise(id, exerciseUpdateModel);
  }

  async deleteExercise(id: number) {
    return await this.exerciseRepository.deleteExercise(id);
  }
}
