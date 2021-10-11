
const initialState = {
    list: []
}

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PEOPLE' : {
            // var newList = [...state.list];
            if(state.list.length > 0) {return {...state}}
            else {
                state.list = action.payload;
                // state.detail = action.payload;
                return {...state};
            }
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer;