import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema } from 'src/database/entity/address.entity';
import { User, UserSchema } from 'src/database/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, {name: 'address', schema: AddressSchema}]),
],
})
export class UserModule {}
