import React from 'react';

const Todo = (props) => {
    console.log('Todo props', props);

    const toggleCompleted = () => {
        props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.id});
        console.log('here we go')
    }

    return (
        <div>
            <p onClick={toggleCompleted}>{props.item}</p>
        </div>
    )
}

export default Todo;