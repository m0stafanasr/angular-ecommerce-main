import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function existEmail(existMails: string[]):ValidatorFn{
    return (control: AbstractControl): ValidationErrors |null =>{
         let email:string=control.value;
         if(email.length==0 && control.untouched)
            return null;

        let validationErrors = {existEmail: {message: "this mail exist"}}
        let found = existMails.includes(email)
        return found? validationErrors:null;
    }

}
