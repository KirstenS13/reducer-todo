export const initialState = [
    {
        item: "",
        completed: false,
        id: ""
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return ([ 
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]);
        case "TOGGLE_COMPLETED":
            state.map(todoObj => {
                if (action.payload === todoObj.id) {
                    return ([
                        ...state,
                        {
                            item: todoObj.item,
                            completed: !todoObj.completed,
                            id: todoObj.id
                        }
                    ])
                } else {
                    return state;
                }
            });
        default: 
            return state;
    }
}
