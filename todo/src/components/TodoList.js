import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('props in TodoList', props);
    console.log('props.todos in TodoList', props.todos);

    const clearCompleted = e => {
        e.preventDefault();
        props.dispatch({type: "CLEAR_COMPLETED"});
    }

    return (
        <div>
            <h3>This is the Todo List</h3>
            <button onClick={clearCompleted}>Clear Completed</button>
            {props.todos.map((todo, i) => {
                return (
                    <Todo 
                        dispatch={props.dispatch} 
                        key={todo.id} 
                        i={i}
                        item={todo.item} 
                        completed={todo.completed}/>
                )
            })}
        </div>
    )
}

export default TodoList;