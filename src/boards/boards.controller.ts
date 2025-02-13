import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  boardService: BoardsService;
  constructor(private boardsService: BoardsService) {
    this.boardService = boardsService;
  }

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }
}
