import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordConfirmationValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(controlName);
    const confirmPasswordControl = formGroup.get(matchingControlName);
  
     console.log(formGroup);
     
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: "invalid password" });
      console.log( confirmPasswordControl.value);
      
    } else {
      confirmPasswordControl.setErrors(null);
    }

    return null;
  };
}