import { all } from 'redux-saga/effects'
import getListPeople from "./People/sagas";
import getListPlanets from './Planets/sagas';
import getListShips from './Ships/sagas';

function *sagas() {
    yield all([
        getListPeople(),
        getListPlanets(),
        getListShips()
    ])
}

export default sagas;