import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { initLogMessageCls } from 'logmessage-cls-hooked';
import { AppModule } from './app.module';
import { appConfig } from './configuration';

initLogMessageCls();
const main = async () => {
  //otelSDK.start();

  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  await app.listen(appConfig.port);
};

main().catch(console.error);
