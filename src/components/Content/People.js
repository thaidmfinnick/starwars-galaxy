import { Link, useRouteMatch }  from 'react-router-dom';
// Component
// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';
const People = () => {
    var id = 1;
    const { url } = useRouteMatch();
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
        </div>
    )
}

export default People;
