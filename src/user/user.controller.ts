import { Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { User, UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService : UserService) {}

  @Post('/create/:name')
  createUser(@Param() params){
    this.userService.addUser(params.name)
    console.log('creates user ' + params.name);
  }

  @Delete('/delete/:id')
  deleteUser(@Param() params){
    this.userService.deleteUser(params.id);
    console.log('delete user ' + params.id);
  }

  @Post('/tweet/:content')
  tweet(@Param() params){
    console.log('tweeting' + params.content);
    this.userService.tweet(params.content);
    //add to tweet db, and user list of tweets
  }

  @Get('/history/:name')
  getHist(@Param() params): string {
    return this.userService.history(this.userService.getUser(params.name));
  }

  @Put('/like/:tweetID')
  likeTweet(@Param() params){
    console.log(this.userService.getUser(params.id) + ' liked ')
    this.userService.getTweet(params.tweetID).like(this.userService.currUser);
  }

  @Put("/switch/:name")
  switch(@Param() params){
    this.userService.switch(params.name);
    console.log("switched to " + params.name);
  }

}
