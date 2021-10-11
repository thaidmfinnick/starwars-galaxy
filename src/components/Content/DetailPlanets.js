import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
// Action
import {renderPlanets} from '../../actions/Page';

// Hook
import BackButton from "../BackButton/ButtonBack";

const DetailPlanets = () => {
    const listDetailPlanets = useSelector(state => state.planets.list);
    const dispatch = useDispatch();
    const { id } = useParams();

    // console.log(state);

    const action = renderPlanets();
    dispatch(action);
    return (
        <div>
            <BackButton type='planets'/>
            <h1>{id}</h1>
            <p>Name: {listDetailPlanets[id-1].name}</p>
            <p>Climate: {listDetailPlanets[id-1].climate}</p>
            <p>Rotation Period: {listDetailPlanets[id-1].rotation_period}</p>
            <p>Orbital Period: {listDetailPlanets[id-1].orbital_period}</p>
            <p>Gravity: {listDetailPlanets[id-1].gravity}</p>
            <p>Population: {listDetailPlanets[id-1].population}</p>
            <p>Diameter: {listDetailPlanets[id-1].diameter}</p>

        </div>
    )
}

export default DetailPlanets;
