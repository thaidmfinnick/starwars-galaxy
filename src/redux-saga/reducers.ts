import { combineReducers } from "redux";
import Ships from "./Ships/reducers"
import People from "./People/reducers";
import Planets from "./Planets/reducers";


export const state = combineReducers({
    people: People,
    ships: Ships,
    planets: Planets
})

export type State = ReturnType<typeof state>;