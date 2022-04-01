import { createSelector } from '@ngrx/store';
//
import { countReducerStateType, storeStateType } from './_type';

//
export const selectorCountReducer = createSelector(
    (state: storeStateType) => state.count_reducer_obj,
    (state: countReducerStateType) => state.count
);
