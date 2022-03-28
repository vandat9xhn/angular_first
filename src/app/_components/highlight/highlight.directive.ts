import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }

    @Input('appHighlight') class_highlight: string = '';
    @Input() class_highlight_default: string = '';

    // ----

    ngOnInit(): void {
        const elm = this.el.nativeElement as HTMLElement;
        elm.addEventListener('mouseenter', () => {
            elm.classList.add(this.class_highlight);
        });

        elm.addEventListener('mouseleave', () => {
            elm.classList.remove(this.class_highlight);
        });
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.highlight('yellow');
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.highlight(null);
    // }

    // highlight(class_highlight: string | null) {
    //     this.el.nativeElement.classList.add(class_highlight);
    // }
}
