import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookmarksService } from '../services/bookmark.service';
import type { CreateBookmarkDto } from '../dto/bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  createBookmark(@Body() dto: CreateBookmarkDto) {
    return this.bookmarksService.createBookmark(dto);
  }

  @Get()
  getAll() {
    return this.bookmarksService.getAll();
  }
}
