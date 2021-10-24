import { Obj } from "../../interface/common"
import { RENDER_LIST_PLANETS, RENDER_LIST_PLANETS_FAIL, RENDER_LIST_PLANETS_SUCCESS } from "../actions"

export const renderListPlanets = (detail: string) => {
    return {
        type: RENDER_LIST_PLANETS,
        payload: detail
    }
}
export const renderListPlanetsSuccess = (detail: Obj) => {
    return {
        type: RENDER_LIST_PLANETS_SUCCESS,
        payload: detail
    }
}

export const renderListPlanetsFail = (detail: any) => {
    return {
        type: RENDER_LIST_PLANETS_FAIL,
        payload: detail
    }
}