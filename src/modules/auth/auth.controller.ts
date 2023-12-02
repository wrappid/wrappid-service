import { Body, Controller, Get, Post, UsePipes, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express';

@Controller('')
export class AuthController {
    constructor(private readonly authService: AuthService ){}
    
    @Get('checkLoginOrRegister')
    checkLoginOrRegister(@Req() req: Request): Promise<any> {
    return this.authService.checkLoginOrRegister(req);
    } 
};

