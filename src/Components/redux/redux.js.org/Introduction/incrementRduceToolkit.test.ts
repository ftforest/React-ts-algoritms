import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit'
test('Redux counterReducer increment decriment ReduceToolkit', () => {

    const counterSlice = createSlice({
        name: 'counter',
        initialState: {
            value: 0
        },
        reducers: {
            incremented: state => {
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                state.value += 1
            },
            decremented: state => {
                state.value -= 1
            }
        }
    })

    //export const { incremented, decremented } = counterSlice.actions
    const { incremented, decremented } = counterSlice.actions

    const store = configureStore({
        reducer: counterSlice.reducer
    })

// Can still subscribe to the store
    store.subscribe(() => console.log(store.getState()))

    expect(store.getState().value).toEqual(0);
// Still pass action objects to `dispatch`, but they're created for us
    store.dispatch(incremented())
    expect(store.getState().value).toEqual(1);
// {value: 1}
    store.dispatch(incremented())
    expect(store.getState().value).toEqual(2);
// {value: 2}
    store.dispatch(decremented())
    expect(store.getState().value).toEqual(1);
// {value: 1}

});
