import { useState, useEffect } from 'react';
import API from '../API';

export const useFetch = () => {
    const [state, setState] = useState([]);
    const fetchData = async() => {
        try {
            const people = await API.fetchPeople();
            const item = people.results[1];
            setState(item);
        } catch(error) {
            console.log('error');
        }
    }
    useEffect(() => {
        setState([]);
        fetchData();
    }, [])


    return {state};
}

