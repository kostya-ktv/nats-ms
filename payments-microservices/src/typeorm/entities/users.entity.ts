import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentEntity } from './payments.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true })
  displayName?: string;

  @Column({ nullable: false })
  email: string;

  @OneToMany(() => PaymentEntity, (payment) => payment.user)
  @JoinColumn()
  payments: PaymentEntity[];
}
