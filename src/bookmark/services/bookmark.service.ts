import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookmarkDto, UpdateBookmarkDto } from '../dto/bookmark.dto';
import { Bookmark } from '../schemas/bookmark.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  async create(dto: CreateBookmarkDto): Promise<Bookmark> {
    const created = new this.bookmarkModel(dto);
    return created.save();
  }

  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkModel.find().exec();
  }

  async findOne(id: string): Promise<Bookmark> {
    const bookmark = await this.bookmarkModel.findById(id).exec();
    if (!bookmark) throw new NotFoundException(`Bookmark not found`);
    return bookmark;
  }

  async update(id: string, dto: UpdateBookmarkDto): Promise<Bookmark> {
    const updated = await this.bookmarkModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException(`Bookmark not found`);
    return updated;
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.bookmarkModel.findByIdAndDelete(id).exec();
  }
}
