import { AbstractControl,ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordvalidationuser:ValidatorFn=(formg : AbstractControl):ValidationErrors|null=>{
    let passctrl = formg.get('pass');
    let userName = formg.get('userName');
    if(!passctrl||!userName||!passctrl.value||!userName.value)
    return null
    let err={'matchedWithUser':{'pass':passctrl?.value, 'confirm':userName?.value}}
    return (passctrl?.value==userName?.value)?null:err
}

export function passwordvalidationpar(passParam:boolean=false):ValidatorFn{
    return (control:AbstractControl)  :ValidationErrors|null=>{
    let passctrl = control.get('pass');
    let userName = control.get('cnfrmPass');
    if(!passctrl||!userName||!passctrl.value||!userName.value)
    return null
    let err={'matchedWithUser':{'pass':passctrl?.value, 'confirm':userName?.value}}
    return (passctrl?.value==userName?.value)?null:err
}

}