import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[checkEmail]',
    providers: [{provide: NG_VALIDATORS,
    useExisting: checkEmailValidator,
multi:true
}]
})

export class checkEmailValidator implements Validator{
    validate(control:AbstractControl): {[key:string]:any} | null{
        return validateEmail(control.value) != null ? null: {'checkEmailkey': true}
    };
}
    let validateEmail =(email:any)=>{
        return String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };
