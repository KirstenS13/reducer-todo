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
        <div>
            <h2>This is the Form</h2>
            <form>
                <label htmlFor="todo">Add a Todo</label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Add a todo..."
                    value={newItem}
                    onChange={handleChanges}
                />
                <button onClick={submitForm}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;