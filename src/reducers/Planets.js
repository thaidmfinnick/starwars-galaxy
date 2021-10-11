const initialState = {
    list: []

}

const planetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLANETS' : {
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

export default planetsReducer;