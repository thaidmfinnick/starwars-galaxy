import { Link, useRouteMatch } from 'react-router-dom';
// Component

// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const Planets = () => {
    var id = 1;
    const { url } = useRouteMatch();
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
        </div>
    )
}

export default Planets;

