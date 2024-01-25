import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreatePaymentDTO {
  @IsNumber()
  @Min(0)
  amount: number;

  @IsNotEmpty()
  userId: string;
}
