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
        <div className="component">
            <div className="todoListHeader">
                <h2>Your Todo List</h2>
                <button onClick={clearCompleted}>Clear Completed</button>
            </div>
            <div className="todoListItems">
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
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;