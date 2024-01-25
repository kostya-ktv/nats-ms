import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString({ message: 'Username required!!' })
  @MinLength(3)
  @MaxLength(32)
  username: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(32)
  displayName?: string;

  @IsEmail()
  email: string;
}
