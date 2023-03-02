import { ValidationPipe, VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { APP_ENV } from './shared/constants/miscs';
import { setupSwagger } from './utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: '*',
    exposedHeaders: '*',
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  if (process.env.APP_ENV !== APP_ENV.PRD) {
    setupSwagger(app);
  }
  await app.listen(config.PORT);
}
bootstrap();
