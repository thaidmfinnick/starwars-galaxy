export const renderPeople = (detail) => {
    return {
        type: 'PEOPLE',
        payload: detail
    }
}

export const renderShips = (detail) => {
    return {
        type: 'SHIPS',
        payload: detail
    }
}

export const renderPlanets = (detail) => {
    return {
        type: 'PLANETS',
        payload: detail
    }
}