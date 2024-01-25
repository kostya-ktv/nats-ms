import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from './users.dto';
import { UsersMicroserviceService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private userService: UsersMicroserviceService) {}
  @MessagePattern({ cmd: 'createUser' })
  async createUser(@Payload() payload: CreateUserDTO) {
    console.log('USERS_MICROSERVICE', payload);
    return await this.userService.createUser(payload);
  }

  @MessagePattern({ cmd: 'getUserById' })
  async getUserById(@Payload() data: { userId: string }) {
    return await this.userService.getUserById(data.userId);
  }

  @EventPattern('paymentCreated')
  paymentCreatedEvent(@Payload() data: any) {
    console.log('[USERS_MICROSERVICE]', `payment created: ${data.id}`);
  }
}
