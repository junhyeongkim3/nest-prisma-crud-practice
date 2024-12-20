import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [WordsModule, QuizzesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
