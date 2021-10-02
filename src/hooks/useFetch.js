import { useState, useEffect } from 'react';
import API from '../API';

// Fetch du lieu theo id va kieu du lieu (people, planets, ships)

export const useFetch = (id, type) => {
    const [state, setState] = useState([]);
    const fetchData = async() => {
        try {
            if (type === 'people')
            {
                const people = await API.fetchPeople();
                setState(people.results[id]);
            }
            else if (type === 'ships')
            {
                const ships = await API.fetchShips();
                setState(ships.results[id]);
            }
            else if (type === 'planets')
            {
                const planets = await API.fetchPlanets();
                setState(planets.results[id]);
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

