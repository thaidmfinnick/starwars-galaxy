import { Obj } from "../../interface/common"
import { RENDER_LIST_SHIPS, RENDER_LIST_SHIPS_FAIL, RENDER_LIST_SHIPS_SUCCESS } from "../actions"

export const renderListShips = (detail: string) => {
    return {
        type: RENDER_LIST_SHIPS,
        payload: detail
    }
}
export const renderListShipsSuccess = (detail: Obj) => {
    return {
        type: RENDER_LIST_SHIPS_SUCCESS,
        payload: detail
    }
}

export const renderListShipsFail = (detail: any) => {
    return {
        type: RENDER_LIST_SHIPS_FAIL,
        payload: detail
    }
}