
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// Action
import { renderShips } from '../../actions/Page';
// Component
// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const Ships = () => {
    var id = 1;
    const { url } = useRouteMatch();
    const listShips = useSelector(state => state.ships.list);
    const dispatch = useDispatch();
    const { state } = useFetchForPage('ships');
    // console.log(state);

    const action = renderShips(state);
    dispatch(action);
    return (
        <div>
            <h1>We are Starships</h1>
            <ul>
                {listShips.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Ships;
