
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createPasswordValidator(): ValidatorFn {
  return (control:AbstractControl) : {[key: string]: any} | null => {

      const value = control.value;
      const re = new RegExp("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$");

      return re.test(value)? null :  {'PasswordNotMatch': true}

}

}

