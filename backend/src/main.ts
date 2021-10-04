import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './exceptionFilters/HttpException.filter';
import session from 'express-session';
import { ConfigService } from '@nestjs/config';
import * as redis from 'redis';
import * as connectRedis from 'connect-redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ConfigService
  const configService = app.get<ConfigService>(ConfigService);

  // Redis config
  const REDIS_HOST = configService.get<string>('REDIS_HOST', null);
  const REDIS_PORT = configService.get<string>('REDIS_PORT', null);

  const RedisStore = require('connect-redis')(session);
  const redisClient = redis.createClient({ url: `redis://${REDIS_HOST}:${REDIS_PORT}` });

  // Redis Log
  redisClient.on('connect', () => console.log('Redis Connect Success'));
  redisClient.on('error', (error) => {
    throw new Error(error);
  });

  // Swagger
  const config = new DocumentBuilder().setTitle('Owl').setDescription('Owl API').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  // CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // SSESSION
  // + https://github.com/tj/connect-redis
  // 세션 스토어를 추가해야한다.
  app.use(
    session({
      // 세션 ID 서명
      secret: configService.get<string>('SESSION_KEY', 'SESSION_KEY'),
      // 요청시 마다 세션을 다시 저장한다
      resave: false,
      // 클라이언트측에서 세션을 저장할때 스토리지 초기화 유무
      saveUninitialized: false,
      // 세션 스토어를 레지스로 설정합니다.
      store: new RedisStore({ client: redisClient }),
    }),
  );

  // ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // ExceptionFilter
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8080);
}
bootstrap();
