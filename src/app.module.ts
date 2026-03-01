import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksModule } from './bookmark/bookmark.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bookmarkdb'),
    BookmarksModule,
  ],
})
export class AppModule {}
