import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoAdded, todoToggled } from './todosSlice'
import { statusFilterChanged, priorityFilterChanged } from './filters/filtersSlice'

function TodoList() {
    const todos = useSelector((state:any) => state.todos)
    const filters = useSelector((state:any) => state.filters)
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(todoAdded({
            id: Date.now(),
            text: 'New Todo',
            completed: false
        }))
    }

    const handleToggleTodo = (id:any) => {
        dispatch(todoToggled(id))
    }

    const handleStatusFilterChange = (status:any) => {
        dispatch(statusFilterChanged(status))
    }

    const handlePriorityFilterChange = (priority:any) => {
        dispatch(priorityFilterChanged(priority))
    }

    return (
        <div>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo:any) => (
                    <li
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div>
                Status Filter:
                <select value={filters.status} onChange={e => handleStatusFilterChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
            <div>
                Priority Filter:
                <select value={filters.priority} onChange={e => handlePriorityFilterChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
    )
}

export default TodoList