import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDTO } from './payments.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() payload: CreatePaymentDTO) {
    return this.natsClient.emit('createPayment', payload);
  }

  @Get('/user/:userId')
  getPaymentsByUserId(@Param('userId') userId: string) {
    return this.natsClient.send({ cmd: 'getPaymentsByUserId' }, userId);
  }
}
