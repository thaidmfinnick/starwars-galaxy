import { API_URL, API_SHIPS, API_PLANETS, API_PEOPLE } from "./config";

const apiSettings = {
    fetchPeople: async ()  => {
        const link = `${API_PEOPLE}/`;
        return await (await fetch(link)).json();
    },

    fetchShips: async () => {
        const link = `${API_SHIPS}/`;
        return await (await fetch(link)).json();
    },

    fetchPlanets: async () => {
        const link = `${API_PLANETS}/`;
        return await (await fetch(link)).json();
    },

    fetchNextPeople: async (id) => {
        const link = `${API_PEOPLE}/${id}`;
        return await (await fetch(link)).json();
    },
    fetchNextShips: async (id) => {
        const link = `${API_SHIPS}/${id}`;
        return await (await fetch(link)).json();
    },
    fetchNextPlanets: async (id) => {
        const link = `${API_PLANETS}/${id}`;
        return await (await fetch(link)).json();
    },
};

export default apiSettings;

