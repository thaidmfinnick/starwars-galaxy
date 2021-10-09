import peopleReducer from './People';
import shipsReducer from './Ships';
import planetsReducer from './Planets';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    people: peopleReducer,
    ships: shipsReducer,
    planets: planetsReducer
})

export default rootReducer;
