import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//
import {
    countReducerStateType,
    storeStateType,
} from 'src/app/store/counter/_type';
// 
import countActions, {
    getInitialReducerCount,
} from 'src/app/store/counter/actions';
import { selectorCountReducer } from 'src/app/store/counter/selectors';

//
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

//
export class LoginComponent implements OnInit {
    count_reducer_obj: Observable<countReducerStateType>;
    count: Observable<number>;

    constructor(private store: Store<storeStateType>) {
        this.count_reducer_obj = store.select('count_reducer_obj');
        this.count = this.store.select(selectorCountReducer);
    }

    ngOnInit(): void {
        getInitialReducerCount(this.store);
    }

    // -----

    handleCountUpReducer() {
        this.store.dispatch(countActions.increment());
    }
}
