import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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'
        }
      }
    }),
    AuthModule,
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
