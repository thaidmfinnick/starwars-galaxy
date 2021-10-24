import { getData } from "../../utils/httpClient";
import * as types from '../actions'
import { put, call, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";



function* doGetListShips (action: any) {
     try {
          // console.log(action.payload);
          const response: AxiosResponse = yield call(getData, action.payload);
          // console.log(response.data);
          yield put({type: types.RENDER_LIST_SHIPS_SUCCESS, payload: response.data})
     } catch (err) {
          yield put({type: types.RENDER_LIST_SHIPS_FAIL, payload: err})
     }
}

export default function* getListShips () {
     yield takeLatest(types.RENDER_LIST_SHIPS, doGetListShips);
     // console.log('Thai pro');
}