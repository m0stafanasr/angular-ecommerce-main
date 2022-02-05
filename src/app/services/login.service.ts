import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private loginSubject: BehaviorSubject<boolean>
  constructor() { 
    this.loginSubject= new BehaviorSubject<boolean>(this.logStatus)
  }

  login(username: string, password:string){
    let token = '202031'
    localStorage.setItem('token', token);
    this.loginSubject.next(true)
  } 

  logout(){
    localStorage.removeItem('token');
    this.loginSubject.next(false)
  }

  get logStatus():boolean{
    return(localStorage.getItem('token')?true:false)
  }

  loginStatus():Observable<boolean>
  {
    return this.loginSubject.asObservable();
  }
} 

