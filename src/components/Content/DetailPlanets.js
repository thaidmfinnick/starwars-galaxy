import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
// Action
import {renderDetailPlanets} from '../../actions/Detail';

// Hook
import BackButton from "../BackButton/ButtonBack";
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

const DetailPlanets = () => {
    const listDetailPlanets = useSelector(state => state.planets.detail);
    const dispatch = useDispatch();
    const { id } = useParams();
    const {state} = useFetchForDetail(id, 'planets');
    // console.log(state);

    const action = renderDetailPlanets(state);
    dispatch(action);
    return (
        <div>
            <BackButton type='planets'/>
            <h1>{id}</h1>
            <p>Name: {listDetailPlanets.name}</p>
            <p>Climate: {listDetailPlanets.climate}</p>
            <p>Rotation Period: {listDetailPlanets.rotation_period}</p>
            <p>Orbital Period: {listDetailPlanets.orbital_period}</p>
            <p>Gravity: {listDetailPlanets.gravity}</p>
            <p>Population: {listDetailPlanets.population}</p>
            <p>Diameter: {listDetailPlanets.diameter}</p>

        </div>
    )
}

export default DetailPlanets;
