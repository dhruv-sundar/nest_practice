import { Injectable } from '@nestjs/common';
import internal from 'stream';

@Injectable()
export class UserService {
  TweetDB : Tweet[];
  UserDB : User[];
  currUser : User;

  switch(name: string){
    for(let user of this.UserDB){
      if(user.name==name){
        this.currUser=user;
      }else{
        console.log("user doesn't exist, please create new one");
      }
    }
  }

  deleteUser(id : string){
    for(let step = 0; step < this.UserDB.length; step++){
        if(this.UserDB.at(step).id == id){
            this.UserDB.splice(step, 1);
            return;
        }
    }
    console.log("user doesn't exist, please try again");
  }

  addUser(name: string){
    this.UserDB.push(new User(name));
  }

  tweet(content: string){
    let temp = new Tweet(content);
    this.currUser.tweet(temp);
    this.TweetDB.push(temp);
  }

  getUser(id: string){
    for(let x of this.UserDB){
      if(x.id==id)return x;
    }
  }

  getTweet(id: number){
    for(let x of this.TweetDB){
      if(x.id==id) return x;
    }
  }

  history(user: User): string{
    return user.tweetHistory();
  }
}

@Injectable()
export class User{
  id: string;
  name: string;
  tweets: Tweet[];
  
  constructor(name: string){
    this.name = name;
    this.id = Math.random()*100 + 1 + '' 
  }

  tweet(content: Tweet){
    this.tweets.push(content);
  }

  tweetHistory():string{
    let tempString = this.name;
    for(let x of this.tweets){
      tempString += "\n"+ x;
    }
    return tempString;
  }
}

@Injectable()
export class Tweet{
  content: string;
  id: number;
  likesCount: number;
  likes: User[]

  constructor(content: string){
    this.content = content;
    this.id = Math.random()*10000 + 1 
  }

  listLikes(): string{
    let tempString = this.content + "\nLikes: " + this.likesCount;
    for(let x of this.likes){
      tempString += "\n"+ x.name;
    }
    return tempString;
  }

  like(user : User){
      this.likes.push(user);
      this.likesCount++;
  }

}