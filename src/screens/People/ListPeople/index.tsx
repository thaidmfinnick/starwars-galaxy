import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import ListItem from '../../../components/ListItem';
import * as types from '../../../redux-saga/actions'
import { State } from '../../../redux-saga/reducers';
import './styles.scss'


const ListPeople = () => {
    var id = 1;
    const listPeople = useSelector((state: State) => state.people.list);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    // console.log(listPeople);
    useEffect(() => {
        dispatch({type: types.RENDER_LIST_PEOPLE, payload: 'people'});
    }, [])
    return (
        <div>
            <h1>We are people</h1>
                <ListItem
                    className='ListPeople'
                    item={listPeople}
                    id={id}
                    url={url}
                />
        </div>
    )
}

export default ListPeople;
