import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import ListItem from '../../../components/ListItem';
import * as types from '../../../redux-saga/actions'
import { State } from '../../../redux-saga/reducers';
import './styles.scss'


const ListShips = () => {
    var id = 1;
    const listShips = useSelector((state: State) => state.ships.list);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    // console.log(listShips);
    useEffect(() => {
        dispatch({type: types.RENDER_LIST_SHIPS, payload: 'starships'});
    }, [])
    return (
        <div>
            <h1>We are Ships</h1>
                <ListItem
                    className='ListShips'
                    item={listShips}
                    id={id}
                    url={url}
                />
        </div>
    )
}

export default ListShips;
