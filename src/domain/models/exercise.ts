export class ExerciseModel{
title:string;
description:string;
image:string;
area:Date;
category?: number;
}



export class FetchExerciseModel{
id:number;
title:string;
description:string;
image:string;
area:Date;
category: number;
}



export class UpdateExerciseModel{
title?:string;
description?:string;
image?:string;
area?:Date;
category?: number;
}
