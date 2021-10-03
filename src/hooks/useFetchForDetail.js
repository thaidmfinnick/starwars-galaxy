import { useState, useEffect } from 'react';
import API from '../API';

// Fetch du lieu theo id va kieu du lieu (people, planets, ships)

// Fetch ca nhan khong fetch ca 10

export const useFetchForDetail = (id, type) => {
    const [state, setState] = useState([]);
    const fetchData = async(id) => {
        try {
            if (type === 'people')
            {
                const people = await API.fetchNextPeople(id);
                setState(people);
            }
            else if (type === 'ships')
            {
                var ships = await API.fetchNextShips(id);
                while (ships.detail === 'Not found') {
                    id = parseInt(id) + 1;
                    ships = await API.fetchNextShips(id);
                }
                setState(ships);
            }
            else if (type === 'planets')
            {
                const planets = await API.fetchNextPlanets(id);
                setState(planets);
            }
        } catch(error) {
            console.log('error');
        }
    }
    useEffect(() => {
        // setState([]);
        fetchData(id);
    }, [])
    return {state};
}

