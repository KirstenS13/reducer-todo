import React from 'react';

const Todo = (props) => {
    console.log('Todo props', props);

    return (
        <div>
            <h4>This is the Todo Item</h4>
            <p>{props.item}</p>
        </div>
    )
}

export default Todo;