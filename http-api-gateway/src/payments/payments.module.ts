import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [NatsModule],
  providers: [],
  controllers: [PaymentsController],
})
export class PaymentModule {}
