import * as dotenv from 'dotenv';

dotenv.config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env['MONGO_URI'],
      database: process.env['DATABASE_NAME'],
      useNewUrlParser: true,
      logging: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      keepConnectionAlive: true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
      // synchronize: true
    }),
    //   TypeOrmModule.forRoot({
    //     type: 'mongodb',
    //     url: process.env['LEGACY_MONGO_URI'],
    //     database: process.env['LEGACY_DATABASE_NAME'],
    //     useNewUrlParser: true,
    //     logging: true,
    //     entities: [__dirname + '/../**/legacy-*.entity{.ts,.js}'],
    //     keepConnectionAlive: true,
    //     useUnifiedTopology: true,
    //     autoLoadEntities: true,
    //     name: 'legecy'
    //     // synchronize: true
    //   })
  ],
})
export default class DatabaseModule {}
