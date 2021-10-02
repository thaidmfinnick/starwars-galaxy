import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
// Component
import DetailPeople from './DetailPeople';
// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const People = () => {
    var id = 1;
    const { path, url } = useRouteMatch();
    const { state } = useFetchForPage('people');
    console.log(state);
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
