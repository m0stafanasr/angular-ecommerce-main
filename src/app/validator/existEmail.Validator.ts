import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { RegisterService } from "../services/register.service";

export function existEmail(existMails: string[]):ValidatorFn{
    return (control: AbstractControl): ValidationErrors |null =>{
         let email:string=control.value;
         if(email.length==0 && control.untouched)
            return null;

        let validationErrors = {existemail: {message: "this mail exist"}}
        let found = existMails.includes(email)
        return found? validationErrors:null;
    }

}

export class existmail {

    constructor(private userService:RegisterService){
       let inputemail=""
        userService.userexist(inputemail)
      let found = this.userService.userexist(inputemail)
    if(found)
    return 
    }
   

}