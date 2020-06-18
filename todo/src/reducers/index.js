export const initialState = {
    todos: [
        {
            item: "",
            completed: false,
            id: ""
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                todos: [ 
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case "TOGGLE_COMPLETED":
            return {
                todos: state.todos.map((todo, i) => i === action.payload ? {...todo, completed: !todo.completed} : todo)
            }
        default: 
            return state;
    }
}
