import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ControllerModule } from './infrastructure/controllers/controller.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { LocalStrategy } from './infrastructure/common/strategies/local.strategy';

import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { GatewayModule } from './infrastructure/gateways/gateway.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { EmailModule } from './infrastructure/services/emails/email.module';
import { TasksModule } from './infrastructure/common/tasks-scheduling/tasks.module';
import { NotificationModule } from './infrastructure/services/notifications/notifications.module';
import { RawBodyMiddleware } from './middlewares/raw-body.middleware';
import { JsonBodyMiddleware } from './middlewares/json-body.middleware';
import { ScheduleModule } from '@nestjs/schedule';
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
