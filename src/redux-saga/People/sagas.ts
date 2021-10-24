import { getData } from "../../utils/httpClient";
import * as types from '../actions'
import { Action } from '../../interface/common'
import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";



function* doGetListPeople (action: Action) {
     try {
          // console.log(action.payload);
          const response: AxiosResponse = yield call(getData, action.payload);
          yield put({type: types.RENDER_LIST_PEOPLE_SUCCESS, payload: response.data})
     } catch (err) {
          yield put({type: types.RENDER_LIST_PEOPLE_FAIL, payload: err})
     }
}

export default function* getListPeople () {
     yield takeLatest(types.RENDER_LIST_PEOPLE, doGetListPeople);
     // console.log('Thai pro');
}