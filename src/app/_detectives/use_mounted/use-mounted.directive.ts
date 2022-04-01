import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
    selector: '[appUseMounted]',
})
export class UseMountedDirective implements OnInit, OnDestroy {
    constructor() {}

    mounted: boolean = false;

    ngOnInit(): void {
        this.mounted = true;
    }

    ngOnDestroy(): void {
        this.mounted = false;
    }
}
