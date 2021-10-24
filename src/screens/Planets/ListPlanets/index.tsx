import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import ListItem from '../../../components/ListItem';
import * as types from '../../../redux-saga/actions'
import { State } from '../../../redux-saga/reducers';
import './styles.scss'


const ListPlanets = () => {
    var id = 1;
    const listPlanets = useSelector((state: State) => state.planets.list);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();

    useEffect(() => {
        dispatch({type: types.RENDER_LIST_PLANETS, payload: 'planets'});
    }, [])
    return (
        <div>
            <h1>We are Planets</h1>
                <ListItem
                    className='ListPlanets'
                    item={listPlanets}
                    id={id}
                    url={url}
                />
        </div>
    )
}

export default ListPlanets;