import React, { useState } from 'react'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: "value"
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <a className='delete' onClick={() => removeTodo(todo.id)}>Delete</a>
                <a className='edit' onClick={() => setEdit({id: todo.id}, {value: todo.text})}>Edit</a>
        </div>
        </div >
    ))
}

export default Todo