import { Action } from "../../interface/common";
import * as types from "../actions"

const initialState = {
    list: [],
    loading: false,
    error: null
}

const Planets = (state = initialState, action: Action) => {
    switch(action.type) {
        case types.RENDER_LIST_PLANETS : 
            return {
                ...state, 
                loading: true
            }
        case types.RENDER_LIST_PLANETS_SUCCESS : {
                return {
                    ...state,
                    list: action.payload.results,
                    loading: false
                }
            }
        case types.RENDER_LIST_PLANETS_FAIL : {
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

export default Planets;