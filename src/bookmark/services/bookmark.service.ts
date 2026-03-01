import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from '../schemas/bookmark.schema';
import { CreateBookmarkDto } from '../dto/bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  async createBookmark(dto: CreateBookmarkDto): Promise<Bookmark> {
    const created = new this.bookmarkModel(dto);
    return created.save();
  }

  async getAll(): Promise<Bookmark[]> {
    return this.bookmarkModel.find().exec();
  }
}
