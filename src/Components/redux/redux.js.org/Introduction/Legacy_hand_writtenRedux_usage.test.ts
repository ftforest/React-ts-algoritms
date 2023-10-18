import React from 'react';
import {nanoid} from "@reduxjs/toolkit";

const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'
// @ts-ignore
export const addTodo = text => ({
    type: ADD_TODO,
    payload: { text, id: nanoid() }
})
// @ts-ignore
export const todoToggled = id => ({
    type: TODO_TOGGLED,
    payload: { id }
})
// @ts-ignore
export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                // @ts-ignore
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        case TODO_TOGGLED:
            return state.map(todo => {
                // @ts-ignore
                if (todo.id !== action.payload.id) return todo

                return {
                    //...todo,
                    // @ts-ignore
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}
