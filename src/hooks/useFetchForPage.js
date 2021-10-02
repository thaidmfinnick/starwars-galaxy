import { useState, useEffect } from 'react';
import API from '../API';

// Fetch du lieu theo kieu du lieu cho Trang (people, planets, ships)

export const useFetchForPage = (type) => {
    const [state, setState] = useState([]);
    const fetchData = async() => {
        try {
            if (type === 'people')
            {
                const people = await API.fetchPeople();
                setState(people.results);
            }
            else if (type === 'ships')
            {
                const ships = await API.fetchShips();
                setState(ships.results);
            }
            else if (type === 'planets')
            {
                const planets = await API.fetchPlanets();
                setState(planets.results);
            }
        } catch(error) {
            console.log('error');
        }
    }
    useEffect(() => {
        // setState([]);
        fetchData();
    }, [])
    return {state};
}