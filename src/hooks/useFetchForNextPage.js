import { useState, useEffect } from 'react';
import API from '../API';

// Fetch du lieu cho trang tiep theo (people, planets, ships)
// Chua biet cach lam the nao nen chua dung

export const useFetchForNextPage = (next, type) => {
    const [state, setState] = useState([]);
    const fetchData = async() => {
        try {
            if (next == 0) {
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