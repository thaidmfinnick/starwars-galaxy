import { getData } from "../../utils/httpClient";
import * as types from '../actions'
import { Action } from '../../interface/common'
import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";



function* doGetListPlanets (action: any) {
     try {
          // console.log(action.payload);
          const response: AxiosResponse = yield call(getData, action.payload);
          // console.log(response.data);
          yield put({type: types.RENDER_LIST_PLANETS_SUCCESS, payload: response.data})
     } catch (err) {
          yield put({type: types.RENDER_LIST_PLANETS_FAIL, payload: err})
     }
}

export default function* getListPlanets () {
     yield takeLatest(types.RENDER_LIST_PLANETS, doGetListPlanets);
     // console.log('Thai pro');
}