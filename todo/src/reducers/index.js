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
            state.todos.map((todoObj) => {
                if (action.payload === todoObj.id) {
                    return {
                        ...todoObj,
                        completed: !todoObj.completed
                    }
                } else {
                    return state;
                }
            });
        default: 
            return state;
    }
}
