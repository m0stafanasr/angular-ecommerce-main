import { AbstractControl,ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

/*export const passwordvalidation= (formg : FormGroup):ValidationErrors|null=>{
    let passctrl = formg.get('pass');
    let cnfrmPassctrl = formg.get('cnfrmpass');
    if(!passctrl||!cnfrmPassctrl||!passctrl.value||!cnfrmPassctrl.value)
    return null
    let err={unmatchedPassword:{message: 'passwords doesnt match', 'pass':passctrl?.value, 'confirm':cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)?null:err
}



export function passwordvalidationpar(passParam:boolean=false):ValidatorFn{
    return (control:AbstractControl)  :ValidationErrors|null=>{
    let passctrl = control.get('pass');
    let cnfrmPassctrl = control.get('cnfrmpass');
    if(!passctrl||!cnfrmPassctrl||!passctrl.value||!cnfrmPassctrl.value)
    return null;

    let err={unmatchedPasswordp:{message: 'passwords doesnt match','pass':passctrl?.value, 'confirm':cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)?null:err
}

}*/

export const passwordvalidation: ValidatorFn =
  (frmGroup: AbstractControl): ValidationErrors | null => {
    let passctrl = frmGroup.get('pass');
    let cnfrmPassctrl = frmGroup.get('cnfrmpass');
    console.log("ready")

    if(!passctrl || !cnfrmPassctrl || !passctrl.value || !cnfrmPassctrl.value)
      return null;
      console.log("ready")

    let valErr={'UnmatchedPassword': {'pass': passctrl?.value, 'confrim': cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)? null : valErr;
  }



// If validator has parameters
export function passwordvalidationpar(complexPassword: boolean=false): ValidatorFn
{
    console.log("ready")
  return (control: AbstractControl) : ValidationErrors | null=>{
    let passctrl= control.get('password');
    let cnfrmPassctrl= control.get('confirmPassword');
    if(!passctrl || !cnfrmPassctrl || !passctrl.value || !cnfrmPassctrl.value)
      return null;
      console.log("ready")

    let valErr={'UnmatchedPassword': {'pass': passctrl?.value, 'confrim': cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)? null : valErr;
  }
}
