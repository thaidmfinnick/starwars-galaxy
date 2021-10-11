import { Link, useRouteMatch }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Action
import { renderPeople } from '../../actions/Page';

// Hook
import { useFetchForPage } from '../../hooks/useFetchForPage';

const People = () => {
    var id = 1;
    const listPeople = useSelector(state => state.people.list);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const { state } = useFetchForPage('people');
    // console.log(listPeople);
    
    const action = renderPeople(state);
    dispatch(action);

    return (
        <div>
            <h1>We are people</h1>
            <ul>
                {listPeople.map(result => (
                    <li><Link key={id} to={`${url}/${id++}`}>{result.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default People;
