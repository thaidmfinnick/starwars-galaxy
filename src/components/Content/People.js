// import { StaticRouter } from 'react-router';
// import { useFetch } from '../../hooks/useFetch';
import API from '../../API';
import { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import BackButton from '../BackButton/ButtonBack';
import DetailPeople from './DetailPeople';
const People = () => {
    var id = 1;
    const [state, setState] = useState([]);
    const { path, url } = useRouteMatch();
    const fetchData = async() => {
        try {
            const people = await API.fetchPeople();
            setState(people.results);
            console.log(people.results);
        } catch(error) {
            console.log('error');
        }
    }
    useEffect(() => {
        // setState([]);
        fetchData();
    }, [])
    return (
        <div>
            <h1>We are people</h1>
            <ul>
                {state.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>

            <Switch>
                {state.map(() =>(
                   <Route path={`${path}/${id}`} component={DetailPeople} /> 
                ))}
            </Switch>
        </div>
    )
}

export default People;
