export const renderDetailPeople = (detail) => {
    return {
        type: 'DETAIL_PEOPLE',
        payload: detail
    }
}

export const renderDetailShips = (detail) => {
    return {
        type: 'DETAIL_SHIPS',
        payload: detail
    }
}

export const renderDetailPlanets = (detail) => {
    return {
        type: 'DETAIL_PLANETS',
        payload: detail
    }
}