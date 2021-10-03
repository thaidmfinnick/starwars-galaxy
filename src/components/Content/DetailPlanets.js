import { useParams } from "react-router"
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

// Hook
import BackButton from "../BackButton/ButtonBack";
const DetailPlanets = () => {
    const { id } = useParams();
    const {state} = useFetchForDetail(id, 'planets');
    // console.log(state);
    return (
        <div>
            <BackButton type='planets'/>
            <h1>{id}</h1>
            <p>Name: {state.name}</p>
            <p>Climate: {state.climate}</p>
            <p>Rotation Period: {state.rotation_period}</p>
            <p>Orbital Period: {state.orbital_period}</p>
            <p>Gravity: {state.gravity}</p>
            <p>Population: {state.population}</p>
            <p>Diameter: {state.diameter}</p>

        </div>
    )
}

export default DetailPlanets;
