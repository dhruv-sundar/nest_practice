import { Controller,  Get, Post, Delete, Param, Put } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('tweets')
export class TweetsController {
constructor(private userService : UserService) {}

  @Get('/:id/list')
  listLikes(@Param() params){
    return this.userService.getTweet(params.id).listLikes();
  }
}
