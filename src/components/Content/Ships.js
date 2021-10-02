import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
// Component
import DetailShips from './DetailShips';
// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const Ships = () => {
    var id = 1;
    const { path, url } = useRouteMatch();
    const { state } = useFetchForPage('ships');
    console.log(state);
    return (
        <div>
            <h1>We are Starships</h1>
            <ul>
                {state.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>

            <Switch>
                {state.map(() =>(
                   <Route path={`${path}/${id}`} component={DetailShips} /> 
                ))}
            </Switch>
        </div>
    )
}

export default Ships;
