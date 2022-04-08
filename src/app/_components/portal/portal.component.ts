import {
    AfterViewInit,
    Component,
    EmbeddedViewRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-portal',
    templateUrl: './portal.component.html',
    styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit, OnChanges, AfterViewInit {
    viewRef!: EmbeddedViewRef<any>;

    constructor() {}

    @Input() show_portal: boolean = false;
    @ViewChild('portal', { read: TemplateRef }) portal!: TemplateRef<any>;

    // -----

    ngOnInit(): void {
        // console.log(this.elm);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.portal) {
            return;
        }

        if (changes['show_portal'].currentValue) {
            this.insertChildren();
        } else {
            this.removeChildren();
        }
    }

    ngAfterViewInit(): void {
        if (this.show_portal) {
            this.insertChildren();
        }
    }

    // -----

    insertChildren(): void {
        const body = document.getElementsByTagName('body')[0];
        this.viewRef = this.portal.createEmbeddedView({});

        this.viewRef.rootNodes.forEach((item) => {
            body.appendChild(item);
        });
    }

    removeChildren(): void {
        const body = document.getElementsByTagName('body')[0];

        this.viewRef.rootNodes.forEach((item) => {
            body.removeChild(item);
        });
    }
}
