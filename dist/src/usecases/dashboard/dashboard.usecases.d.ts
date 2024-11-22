import { UserRepository } from 'src/infrastructure/repository/user.repository';
import { ExerciseRepository } from 'src/infrastructure/repository/exercise.repository';
import { RoutineRepository } from 'src/infrastructure/repository/routine.repository';
import { SupportRepository } from 'src/infrastructure/repository/support.repository';
export declare class DashboardUseCases {
    private readonly usersRepository;
    private readonly exercoseRepository;
    private readonly supportRepository;
    private readonly routinesRepository;
    constructor(usersRepository: UserRepository, exercoseRepository: ExerciseRepository, supportRepository: SupportRepository, routinesRepository: RoutineRepository);
    getStats(): Promise<{
        usersCount: number;
        exercisesCount: any;
        routinesCount: any;
        supportCount: any;
    }>;
    getDefaultRoutine(): Promise<any>;
    getRecommendedRoutines(userId: number): Promise<any>;
    getTopExercises(): Promise<any>;
    getGraphsData(): Promise<{
        exercisesCountPerCategory: any;
        exercisesCountPerArea: any;
        routinesCountPerCategory: any;
        routinesCountPerArea: any;
    }>;
}
