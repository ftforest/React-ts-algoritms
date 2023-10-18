import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state:any, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },
        todoToggled(state, action) {
            const todo:any = state.find((todo:any) => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer