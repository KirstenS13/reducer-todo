import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('props', props);
    console.log('props.todos', props.todos);

    return (
        <div>
            <h3>This is the Todo List</h3>
            {props.todos.map(todo => {
                return (
                    <Todo key={todo.id} item={todo.item} completed={todo.completed}/>
                )
            })}
        </div>
    )
}

export default TodoList;