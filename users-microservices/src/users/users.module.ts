import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersMicroserviceService } from './users.service';
import { UserEntity } from 'src/typeorm/entities/users.entity';
import { PaymentEntity } from 'src/typeorm/entities/payments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PaymentEntity])],
  providers: [UsersMicroserviceService],
  controllers: [UsersMicroserviceController],
})
export class UsersModule {}
