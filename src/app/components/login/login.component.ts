import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedin: boolean=false;
  username:string=''
  password:string=''
  basicUser:string=''
  basicpass:string=''
  
  constructor(private loginService: LoginService, private router: Router, private location: Location ) {
    this.basicUser= "mostafa"
    this.basicpass="pass123"
   }

  ngOnInit(): void {

    this.loggedin= this.loginService.logStatus;
  }
  
 

  
  login(){
    if(this.username==this.basicUser && this.password==this.basicpass){
      this.loginService.login(this.username, this.password)
      this.loggedin= this.loginService.logStatus
     
        this.location.back()
    
       // this.router.navigate(['profile'])
     
    }else{
      alert("wrong name or password")
    }
    
  }

}
