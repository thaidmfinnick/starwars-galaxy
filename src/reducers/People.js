
const initialState = {
    list: [],
    detail: []
}

const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PEOPLE' : {
            // var newList = [...state.list];
            state.list = action.payload;
            return {...state};
        }
        case 'DETAIL_PEOPLE' : {
            state.detail = action.payload;
            return {...state};
        }
        default: {
            return state;
        }
    }
}

export default peopleReducer;