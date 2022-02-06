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
  logStatus:boolean=false;
  constructor(private loginService: LoginService, private router: Router, private location: Location ) {
    this.basicUser= "mostafa"
    this.basicpass="pass123"
   }

  ngOnInit(): void {

    this.loggedin= this.loginService.logStatus;
  }
  
 

  
  login(userName:string, pass:string){
    

      this.loginService.login(userName, pass)
      this.loggedin= this.loginService.logStatus
     
        this.location.back()
    
       // this.router.navigate(['profile'])
     
 
    
  }

}
