import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isAuth: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'Admin' && password === '123Qw#!erty') {
      this.isAuth = true;
      this.router.navigate(['/'])
    }
  }

  isLogged() {
    return this.isAuth;
  }

  LogOut() {
    this.isAuth = false;
    this.router.navigate(['login']);
  }
}
