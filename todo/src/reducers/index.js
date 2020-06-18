export const initialState = [
    {
        item: "Sample todo",
        completed: false,
        id: 0
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
            ])
        default: 
            return state;
    }
}
