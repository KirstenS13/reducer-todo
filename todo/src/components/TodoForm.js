import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newItem, setNewItem] = useState("");

    const handleChanges = e => {
        setNewItem(e.target.value);
    }

    const submitForm = e => {
        e.preventDefault();
        props.dispatch({ type: 'ADD_ITEM', payload: newItem });
        setNewItem("");
    }

    return (
        <div className="component">
            <form onSubmit={submitForm}>
                <label htmlFor="todo"><h2>Add a Todo</h2></label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Add a todo..."
                    value={newItem}
                    onChange={handleChanges}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;