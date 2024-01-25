import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @Post()
  createUser(@Body() dto: CreateUserDTO) {
    console.log(dto);
    return this.natsClient.send({ cmd: 'createUser' }, dto);
  }
}
