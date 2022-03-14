import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  login() {
    return { msg: "I'm login" };
  }

  register() {
    return { msg: "I'm register" };
  }
}
