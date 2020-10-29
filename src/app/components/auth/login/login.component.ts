import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/guards/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  username : string
  password : string
  alert : boolean

  constructor(public loginService : LoginService) { 
    this.alert = true
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.username, this.password)
    localStorage.setItem('logged', '1')
    this.alert = this.loginService.isLogged()
  }

}
