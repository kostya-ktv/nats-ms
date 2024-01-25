import { Body, Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';
import { CreatePaymentDTO } from './payments.dto';
import { PaymentsMicroserviceService } from './payments.service';
import { lastValueFrom } from 'rxjs';
import { UserEntity } from 'src/typeorm/entities/users.entity';

@Controller()
export class PaymentMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private readonly paymentsService: PaymentsMicroserviceService,
  ) {}

  @EventPattern('createPayment')
  async createPayment(@Body() dto: CreatePaymentDTO) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, { userId: dto.userId }),
    );
    const payment = await this.paymentsService.createPayment(dto, user);
    console.log('[PAYMENTS_MICROSERVICE]', JSON.stringify(payment));
    return this.natsClient.emit('paymentCreated', {
      created_at: Date.now(),
      id: payment.id,
    });
  }

  @MessagePattern({ cmd: 'getPaymentsByUserId' })
  async getPaymentsByUserId(@Body() dto: { userId: string }) {
    const user = await lastValueFrom<UserEntity>(
      this.natsClient.send({ cmd: 'getUserById' }, { userId: dto.userId }),
    );
    return await this.paymentsService.getPaymentsByUserId(user.id);
  }
}
