import { MyCronJob } from './infrastructure/services/cron/cron-jobs';
import { RabbitMQModule } from './infrastructure/config/rabbitmq/rabbitmq.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ControllerModule } from './infrastructure/controllers/controller.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { JwtModule } from './infrastructure/services/jwt/jwt.module';
import { LocalStrategy } from './infrastructure/common/strategies/local.strategy';

import { JwtRefreshTokenStrategy } from './infrastructure/common/strategies/jwtRefresh.strategy';
import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { RabbitMQService } from './infrastructure/services/rabbitmq.service';
import { MicroServiceModule } from './infrastructure/microservices/microservice.module';
import { GatewayModule } from './infrastructure/gateways/gateway.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EmailModule } from './infrastructure/services/emails/email.module';
import { TasksModule } from './infrastructure/common/tasks-scheduling/tasks.module';
import { QueueModule } from './infrastructure/common/queues/queues.module';
import { NotificationModule } from './infrastructure/services/notifications/notifications.module';
import { RawBodyMiddleware } from './middlewares/raw-body.middleware';
import { JsonBodyMiddleware } from './middlewares/json-body.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtService } from '@nestjs/jwt';
import { LoginUseCases } from './usecases/auth/login.usecases';
import { UseCaseModule } from './usecases/usecase.module';

@Module({
  imports: [
    EmailModule,
    TasksModule,
    // QueueModule,
    NotificationModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'uploads'),
    }),
    GatewayModule,
    MicroServiceModule,
    RabbitMQModule,
    TypeOrmConfigModule,
    ControllerModule,
    BcryptModule,
    BcryptModule,
    EnvironmentConfigModule,
    ScheduleModule,
    UseCaseModule,
  ],
  controllers: [],
  providers: [LocalStrategy, JwtStrategy],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes({
        path: '/wallets/webhook',
        method: RequestMethod.POST,
      })
      .apply(JsonBodyMiddleware)
      .forRoutes('*');
  }
}
