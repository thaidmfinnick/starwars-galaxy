import { Obj } from "../../interface/common"
import { RENDER_LIST_PEOPLE, RENDER_LIST_PEOPLE_FAIL, RENDER_LIST_PEOPLE_SUCCESS } from "../actions"

export const renderListPeople = (detail: string) => {
    return {
        type: RENDER_LIST_PEOPLE,
        payload: detail
    }
}
export const renderListPeopleSuccess = (detail: Obj) => {
    return {
        type: RENDER_LIST_PEOPLE_SUCCESS,
        payload: detail
    }
}

export const renderListPeopleFail = (detail: any) => {
    return {
        type: RENDER_LIST_PEOPLE_FAIL,
        payload: detail
    }
}