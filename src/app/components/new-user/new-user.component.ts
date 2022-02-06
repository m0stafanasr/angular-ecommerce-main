import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { existEmail } from 'src/app/validator/existEmail.Validator';
import { existUser } from 'src/app/validator/existUser.validator';
import { passwordvalidation } from 'src/app/validator/password.validator';
import { passwordvalidationuser } from 'src/app/validator/usermatch.validator';
import { Iuser } from 'src/app/view_models/Iuser';
import {Router} from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  registerform: FormGroup;
  existMails:string[]=[]
  ExistUsers:string[]=[]


  constructor(private fB: FormBuilder, private router: Router , private userserv: RegisterService, private authserv: LoginService) { 
    this.ExistUsers=["mostafa", "salma", ];
    this.existMails=["dd@dd.com", "mostafa@gmail.com"]
    this.registerform= fB.group({

    userName:['', [Validators.required, Validators.pattern('[A-Za-z]{5,}'),existUser(this.ExistUsers) ]],
    pass:['', [Validators.required, Validators.pattern('[A-Za-z0-9]{6,}')]],
    cnfrmpass: ['',[Validators.required]],
    email:['',[Validators.required, existEmail(this.existMails)]],
    phones:fB.array([this.fB.control('')] ),
    address:fB.group({
      city:['',[Validators.required]],
      street:['',[Validators.required]],
      pstCode:['',[Validators.required]],

      }),
      delivery: [''],
      deliverySpec:['']
    },{validators: [passwordvalidation]})

  }


 

  ngOnInit(): void {
  
  }


  get userName(){
    return this.registerform.get('userName');
  }

  get pass(){
    return this.registerform.get('pass')
  }
  get cnfrmPass(){
    return this.registerform.get('cnfrmPass')
  }

  get email(){
    return this.registerform.get('email')

  }
  get phones(){
    return this.registerform.get('phones') as FormArray
  }
  get delivery(){
    return this.registerform.get('delivery') 
  }
  addPhone(event:any){
    this.phones.push(this.fB.control(''))
    event.target?.classList.add('d-none');
  }
  get city(){
    return this.registerform.get('city')
  }
get pstCode(){
  return this.registerform.get('pstCode')
}
get street(){
  return this.registerform.get('street')
}
  updateDelivery(){
    if (this.delivery?.value == "specificDay") {
      this.registerform.get('specificDelivery')?.addValidators([Validators.required]);
    }
    else {
      this.registerform.get('specificDelivery')?.clearValidators();
    }
    this.registerform.get('specificDelivery ')?.updateValueAndValidity();
  }

  

removephone(){
  this.phones.removeAt(this.phones.length-1)
}


 register(){
  let userModel: Iuser  = this.registerform.value as Iuser;
  console.log(userModel);

  const observer={
    next: (userModel:Iuser)=>{
      this.router.navigateByUrl('/login')
    }, error:  (err:Error)=>{alert(err.message)}
  }
  this.userserv.addUser(userModel).subscribe(observer);
  this.authserv.login(userModel.username,userModel.password)
}

check()
{
 let found = this.userserv.userexist("mostafanasr2020@gmail.com");
 console.log(found);
}

 }

 

