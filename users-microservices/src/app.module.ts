import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/entities/users.entity';
import { PaymentEntity } from './typeorm/entities/payments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //same according with docker compose
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [UserEntity, PaymentEntity],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
