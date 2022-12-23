import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap()
  .catch((error) => console.error(error))
  .then(() => console.log(`Listening on http://localhost:${port}`));
