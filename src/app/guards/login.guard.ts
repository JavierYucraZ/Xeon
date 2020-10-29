import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private login: LoginService) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.login.isLogged() || localStorage.getItem('logged') === '1'){
      return true;
    }else{
      this.router.navigate(['login'])
    }
  }
}
