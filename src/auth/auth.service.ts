import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: "I'm login" };
  }

  register() {
    return { msg: "I'm register" };
  }
}
