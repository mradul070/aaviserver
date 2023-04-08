import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/database/entity/address.entity';
import { User, UserSchema } from 'src/database/entity/user.entity';
import { ElasticSearchModule } from 'src/elastic/elatic.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, {name: Address.name, schema: AddressSchema}]),
  ElasticSearchModule
],
})
export class UserModule {}
