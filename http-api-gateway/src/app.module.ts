import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PaymentModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
