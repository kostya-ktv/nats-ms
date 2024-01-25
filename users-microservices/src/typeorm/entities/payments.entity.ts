import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './users.entity';

@Entity({
  name: 'payments',
})
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  amount: number;

  @ManyToOne(() => UserEntity, (user) => user.payments)
  user: UserEntity;
}
