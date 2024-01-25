import { Module } from '@nestjs/common';
import { PaymentsMicroserviceModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from './typeorm/entities/payments.entity';
import { UserEntity } from './typeorm/entities/users.entity';

@Module({
  imports: [
    PaymentsMicroserviceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      //same according with docker compose
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [PaymentEntity, UserEntity],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
