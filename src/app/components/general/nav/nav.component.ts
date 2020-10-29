import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/guards/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.LogOut()
    localStorage.removeItem('logged')
  }

}
