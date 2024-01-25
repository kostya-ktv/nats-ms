import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/typeorm/entities/payments.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDTO } from './payments.dto';
import { UserEntity } from 'src/typeorm/entities/users.entity';

@Injectable()
export class PaymentsMicroserviceService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentsRepo: Repository<PaymentEntity>,
  ) {}

  async createPayment(dto: CreatePaymentDTO, user: UserEntity) {
    const payment = this.paymentsRepo.create({
      amount: dto.amount,
      user,
    });
    return await this.paymentsRepo.save(payment);
  }

  async getPaymentsByUserId(userId: string) {
    return await this.paymentsRepo.find({
      where: {
        user: { id: userId },
      },
    });
  }
}
