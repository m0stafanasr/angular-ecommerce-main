import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { IProduct } from 'src/app/view_models/iproduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loggedIn:boolean

  constructor(private loginservice:LoginService, private router:Router) { 
    this.loggedIn=this.loginservice.logStatus
  }

  ngOnInit(): void {
    this.loginservice.loginStatus().subscribe(stat=>{
      this.loggedIn=stat
      
    })
  }
  logout(){
    this.loginservice.logout()
    this.loggedIn=this.loginservice.logStatus

  }
}
