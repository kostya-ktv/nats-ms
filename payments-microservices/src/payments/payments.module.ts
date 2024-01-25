import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payments.controller';
import { NatsModule } from 'src/nats/nats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/typeorm/entities/payments.entity';
import { PaymentsMicroserviceService } from './payments.service';
import { UserEntity } from 'src/typeorm/entities/users.entity';

@Module({
  imports: [NatsModule, TypeOrmModule.forFeature([PaymentEntity, UserEntity])],
  providers: [PaymentsMicroserviceService],
  controllers: [PaymentMicroserviceController],
})
export class PaymentsMicroserviceModule {}
