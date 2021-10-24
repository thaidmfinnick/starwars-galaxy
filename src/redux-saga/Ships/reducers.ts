import { Action } from "../../interface/common";
import * as types from "../actions"

const initialState = {
    list: [],
    loading: false,
    error: null
}

const Ships = (state = initialState, action: Action) => {
    switch(action.type) {
        case types.RENDER_LIST_SHIPS : 
            return {
                ...state, 
                loading: true
            }
        case types.RENDER_LIST_SHIPS_SUCCESS : {
            // state.list = action.payload.results;
            // console.log(state.list);
                return {
                    ...state,
                    list: action.payload.results,
                    loading: false
                }
            }
        case types.RENDER_LIST_SHIPS_FAIL : {
                return {
                    ...state,
                    error: action.payload, 
                    loading: false
                }
            }
        default: {
            return state;
        }
    }
}

export default Ships;