import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './users.dto';
import { UserEntity } from 'src/typeorm/entities/users.entity';

@Injectable()
export class UsersMicroserviceService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async createUser(payload: CreateUserDTO) {
    const newUser = this.userRepo.create({
      ...payload,
    });
    return await this.userRepo.save(newUser);
  }

  async getUserById(userId: string) {
    return await this.userRepo.findOneOrFail({
      where: {
        id: userId,
      },
    });
  }
}
