import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import { DatabaseModule } from './common/database/databaseModule';
import { PostModule } from './post/post.module';
import { TestModule } from './test/test.module';
@Module({
  imports: [
    MikroOrmModule.forRootAsync(DatabaseModule),
    PostModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
