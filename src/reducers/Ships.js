const initialState = {
    list: [],
    detail: []
}

const shipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHIPS' : {
            state.list = action.payload;
            return {...state};
        }
        case 'DETAIL_SHIPS' : {
            state.detail = action.payload;
            return {...state};
        }
        default: {
            return state;
        }
    }
}

export default shipsReducer;