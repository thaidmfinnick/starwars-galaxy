import { API_SHIPS, API_PLANETS, API_PEOPLE } from "./config";

const apiSettings = {
    fetchPeople: async ()  => {
        const link = `${API_PEOPLE}/`;
        return await (await fetch(link)).json();
    },

    fetchShips: async shipsId => {
        const link = `${API_SHIPS}/${shipsId}`;
        return await (await fetch(link)).json();
    },

    fetchPlanets: async planetsId => {
        const link = `${API_PLANETS}/${planetsId}`;
        return await (await fetch(link)).json();
    },
};

export default apiSettings;

