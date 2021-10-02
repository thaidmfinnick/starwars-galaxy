import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
// Component
import DetailPlanets from './DetailPlanets';
// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const Planets = () => {
    var id = 1;
    const { path, url } = useRouteMatch();
    const { state } = useFetchForPage('planets');
    console.log(state);
    return (
        <div>
            <h1>We are Planets</h1>
            <ul>
                {state.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>

            <Switch>
                {state.map(() =>(
                   <Route path={`${path}/${id}`} component={DetailPlanets} /> 
                ))}
            </Switch>
        </div>
    )
}

export default Planets;

