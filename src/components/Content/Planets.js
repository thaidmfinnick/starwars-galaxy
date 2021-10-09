import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Action
import { renderPlanets } from '../../actions/Page';
// Component

// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const Planets = () => {
    var id = 1;
    const listPlanets = useSelector(state => state.planets.list);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const { state } = useFetchForPage('planets');
    // console.log(state);

    const action = renderPlanets(state);
    dispatch(action);
    return (
        <div>
            <h1>We are Planets</h1>
            <ul>
                {listPlanets.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Planets;

