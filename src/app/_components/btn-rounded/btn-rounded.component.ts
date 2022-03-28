import { Component, Input } from '@angular/core';

//
@Component({
    selector: 'app-btn-rounded',
    templateUrl: './btn-rounded.component.html',
    styleUrls: ['./btn-rounded.component.scss'],
})

//
export class BtnRoundedComponent {
    constructor() {}

    @Input() props: Partial<HTMLButtonElement> = {};

    // -----

    handleClick(): void {
        this.props.click && this.props.click();
    }
}
