import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  boardService: BoardsService;
  constructor(private boardsService: BoardsService) {
    this.boardService = boardsService;
  }

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }
}
