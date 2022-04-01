import { createReducer, on } from '@ngrx/store';
//
import { countReducerStateType } from './_type';
//
import countActions from './actions';

//
const initialState: countReducerStateType = {
    count: 0,
    fetching: false,
};

//
export const counterReducer = createReducer(
    initialState,
    //
    on(countActions.initial, (state, payload) => ({
        count: payload.initial,
        fetching: true,
    })),

    on(countActions.increment, (state) => {
        return {
            ...state,
            count: state.count + 1,
        };
    }),
    on(countActions.decrement, (state) => ({
        ...state,
        count: state.count - 1,
    })),
    on(countActions.reset, (state) => ({ count: 0, fetching: true }))
);
