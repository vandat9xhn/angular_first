import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appDynamicProperties]',
})
export class DynamicPropertiesDirective implements OnInit {
    constructor(private el: ElementRef) {}

    @Input('appDynamicProperties') props: Partial<HTMLElement> = {};

    // ----

    ngOnInit(): void {
        const elm = this.el.nativeElement as HTMLElement;

        for (const [key, value] of Object.entries(this.props)) {
			
        }
    }
}
