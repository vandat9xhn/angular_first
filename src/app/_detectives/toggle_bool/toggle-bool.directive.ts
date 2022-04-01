import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appToggleBool]',
})
export class ToggleBoolDirective {
    constructor() {}

    @Input() is_true: boolean = false;

    toggleBool(): void {
        this.is_true = !this.is_true;
    }
}
