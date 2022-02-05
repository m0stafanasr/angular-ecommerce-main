import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function existUser(existUsers: string[]):ValidatorFn{
    return (control: AbstractControl): ValidationErrors |null =>{
         let userName:string=control.value;
         if(userName.length==0 && control.untouched)
            return null;

        let validationErrors = {existUser: {message: "this user exist"}}
        let found = existUsers.includes(userName)
        return found? validationErrors:null;
    }

}
