import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [
    AuthModule,
    ConfigurationModule,
    UserModule,
    AddressModule,
    MongooseModule.forRoot(
      'mongodb+srv://mradul070:klYnE26ofntvqstm@cluster0.l3igmrx.mongodb.net/waitlist?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
