import { useParams } from "react-router"
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

// Hook
import BackButton from "../BackButton/ButtonBack";
const DetailShips = () => {
    var { id } = useParams();
    id = parseInt(id) + 1;
    const {state} = useFetchForDetail(id, 'ships');
    // console.log(id);
    // console.log(state);
    return (
        <div>
            <BackButton type='ships'/>
            <h1>{id-1}</h1>
            <p>Name: {state.name}</p>
            <p>Model: {state.model}</p>
            <p>Manufacturer: {state.manufacturer}</p>
            <p>MGLT: {state.MGLT}</p>
            <p>Consumables: {state.consumbables}</p>
            <p>Cost in credits: {state.cost_in_credits}</p>
            <p>Crew: {state.crew}</p>
        </div>
    )
}

export default DetailShips;
