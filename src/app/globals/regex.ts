import { AbstractControl } from '@angular/forms';

export function ValidatePhoneNumber(control: AbstractControl) {
    if (!(/^[0-9]{10}$/.test(control.value))) {
        return { phoneNumber: true };
    }
    return null;
}

export function ValidateCurp(control: AbstractControl) {
    if (!(/^[a-zA-ZñÑ]{4}[\d]{6}(H|h|M|m)[a-zA-Z]{5}[a-zA-Z0-9]{2}$/.test(control.value))) {
        return { curp: true };
    }
    return null;
}