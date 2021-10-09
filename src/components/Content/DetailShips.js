import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
// Action
import {renderDetailShips} from '../../actions/Detail';

// Hook
import BackButton from "../BackButton/ButtonBack";
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

const DetailShips = () => {
    const listDetailShips = useSelector(state => state.ships.detail);
    const dispatch = useDispatch();
    var { id } = useParams();
    const {state} = useFetchForDetail(id, 'ships');

    const action = renderDetailShips(state);
    dispatch(action);

    return (
        <div>
            <BackButton type='ships'/>
            <h1>{id}</h1>
            <p>Name: {listDetailShips.name}</p>
            <p>Model: {listDetailShips.model}</p>
            <p>Manufacturer: {listDetailShips.manufacturer}</p>
            <p>MGLT: {listDetailShips.MGLT}</p>
            <p>Consumables: {listDetailShips.consumbables}</p>
            <p>Cost in credits: {listDetailShips.cost_in_credits}</p>
            <p>Crew: {listDetailShips.crew}</p>
        </div>
    )
}

export default DetailShips;
