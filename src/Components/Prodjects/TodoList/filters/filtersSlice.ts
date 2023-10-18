import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        status: 'all',
        priority: 'all'
    },
    reducers: {
        statusFilterChanged(state, action) {
            state.status = action.payload
        },
        priorityFilterChanged(state, action) {
            state.priority = action.payload
        }
    }
})

export const { statusFilterChanged, priorityFilterChanged } = filtersSlice.actions
export default filtersSlice.reducer