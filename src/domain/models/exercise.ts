export class ExerciseModel {
  title: string;
  description: string;
  image: string;
  area: Date;
  deal: number;
}

export class FetchExerciseModel {
  id: number;
  title: string;
  description: string;
  image: string;
  area: Date;
  deal: number;
}

export class UpdateExerciseModel {
  title?: string;
  description?: string;
  image?: string;
  area?: Date;
  deal?: number;
}
