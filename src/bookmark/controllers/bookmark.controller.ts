import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookmarksService } from '../services/bookmark.service';
import * as bookmarkDto from '../dto/bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(@Body() dto: bookmarkDto.CreateBookmarkDto) {
    return this.bookmarksService.create(dto);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: bookmarkDto.UpdateBookmarkDto) {
    return this.bookmarksService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmarksService.remove(id);
  }
}
