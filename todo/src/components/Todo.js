import React from 'react';

const Todo = (props) => {
    console.log('Todo props in Todo', props);
    console.log('props.completed in Todo', props.completed)

    const toggleCompleted = () => {
        props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.id});
        console.log('TOGGLE_COMPLETED dispatch');
        console.log('props.completed', props.completed)
    }

    return (
        <div>
            <p onClick={toggleCompleted} className={props.completed === false ? "todoItem" : "todoItem completed"}>{props.item}</p>
        </div>
    )
}

export default Todo;