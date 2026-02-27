import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UsersService } from "src/users/users.service";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(private readonly userService: UsersService){
        super()
    }
    serializeUser(user: any, done: Function) {
        console.log(user)
        done(null, user.id);
    }
    async deserializeUser(userId:string, done: Function) {
        const user = await this.userService.getUserById(userId);
        done(null, user);
    }
    
}