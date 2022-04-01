import { createAction, props, Store } from '@ngrx/store';
//
import { FakeAPI } from 'src/app/_api/FakeAPI';

//
const countActions = {
    increment: createAction('Increment'),
    decrement: createAction('Decrement'),
    reset: createAction('Reset'),
    //
    initial: createAction('Initial', props<{ initial: number }>()),
};

//
export const getInitialReducerCount = async (
    store: Store<{ count_reducer_obj: { count: number; fetching: boolean } }>
) => {
    await FakeAPI();
    store.dispatch(countActions.initial({ initial: 6 }));
};

export default countActions;
