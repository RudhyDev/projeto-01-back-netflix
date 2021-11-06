import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'; 
import { UserRole } from './enum/role.enum';

@Injectable()
export class UsersService {
    constructor(private db: PrismaService){}

    async create(data: Prisma.UserCreateInput, role: UserRole){}

}
