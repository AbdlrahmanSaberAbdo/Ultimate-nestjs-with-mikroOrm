import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { DatabaseModule } from './common/database/databaseModule';
@Module({
  imports: [
    MikroOrmModule.forRootAsync(DatabaseModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
