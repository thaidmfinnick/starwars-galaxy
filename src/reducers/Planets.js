const initialState = {
    list: [],
    detail: []
}

const planetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLANETS' : {
            state.list = action.payload;
            return {...state};
        }
        case 'DETAIL_PLANETS' : {
            state.detail = action.payload;
            return {...state};
        }
        default: {
            return state;
        }
    }
}

export default planetsReducer;