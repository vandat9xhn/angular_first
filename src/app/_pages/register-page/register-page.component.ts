import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
//
import { useMountedInjector } from 'src/app/hooks/useMountedInjector';
import { ToggleBoolDirective } from 'src/app/_detectives/toggle_bool/toggle-bool.directive';
import { UseMountedDirective } from 'src/app/_detectives/use_mounted/use-mounted.directive';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
    providers: [useMountedInjector],
})
export class RegisterPageComponent implements OnInit, OnDestroy, AfterViewInit {
    constructor(
        // private mounted_obj: useMountedInjector,
        // private router: Router,
        private _viewContainerRef: ViewContainerRef
    ) {}

    @ViewChild(ToggleBoolDirective) childToggleBool!: ToggleBoolDirective;
    @ViewChild(UseMountedDirective) childUseMounted!: UseMountedDirective;

    ngOnInit(): void {
        // this.mounted_obj.handleMounted();
        // console.log(this.mounted_obj.mounted);
    }

    ngAfterViewInit(): void {}

    ngOnDestroy(): void {
        // this.mounted_obj.handleUnmounted();
        // console.log(this.mounted_obj.mounted);
        // console.log(this.childUseMounted.mounted);
    }

    // ---

    handleToggleBool() {
        this.childToggleBool.toggleBool();
        // console.log(this.childToggleBool.is_true);
        // this.router.navigate(['/login'])
    }
}
