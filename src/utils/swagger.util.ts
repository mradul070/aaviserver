import { DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from '../config';
import * as basicAuth from 'express-basic-auth';

export function setupSwagger(app: INestApplication): void {
  // basic auth for swagger documentation
  const user: string = config.SWAGGER_USER;
  const password: string = config.SWAGGER_PWD;
  const users = {
    [user]: password,
  };
  app.use(
    ['/api/docs/**'],
    basicAuth({
      challenge: true,
      users,
    }),
  );

  // Swagger documentation configs
  const swaggerConfig = new DocumentBuilder()
    .setTitle('waitlist Service')
    .setDescription('waitlist related api')
    .setVersion('1.0.0')
    .addApiKey({ type: 'apiKey', name: 'X-API-KEY', in: 'header' }, 'X-API-KEY')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
}
