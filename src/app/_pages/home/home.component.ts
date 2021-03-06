import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationStart,
    NavigationEnd,
    Router,
} from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { FakeAPI } from 'src/app/_api/FakeAPI';

//
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
//
export class HomeComponent implements OnInit, OnDestroy {
    //
    constructor(private route: ActivatedRoute, private router: Router) {}

    btn_props: Partial<HTMLButtonElement> = {
        click: () => {
            console.log(1);
        },
        className: 'home_btn_rounded',
    };

    letters = ['a', 'b', 'c', 'd', 'e'];

    //
    @Input() name = 'Home';

    // -----

    ngOnInit(): void {
        const subscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (!confirm()) {
                    this.router.navigate([location.pathname + location.search]);
                }
            }
        });

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                subscription.unsubscribe();
            }
        });

        // NavigationCancel
        // NavigationError
        // RoutesRecognized

        //
        this.handleObserver();
    }

    ngOnDestroy(): void {
        console.log(this.name);
    }

    // -----

    handleClick(): void {
        console.log(this.route);
    }

    handleChangeName(): void {
        // console.log(this.name);
    }

    handleDeleteLetter(i: number): void {
        this.letters.splice(i, 1);
    }

    // RxJs
    handleObserver() {
        const handleComplete = async (observer: Subscriber<any>) => {
            await FakeAPI();
            observer.complete();
        };
        const observable = new Observable((observer) => {
            observer.next(1);
            observer.next(2);

            handleComplete(observer);
        });

        observable.subscribe({
            next: (val) => console.log(val),
            complete: () => console.log('Done'),
        });
    }
}
