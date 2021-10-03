import { useParams } from "react-router"
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

// Hook
import BackButton from "../BackButton/ButtonBack";
const DetailPeople = () => {
    const { id } = useParams();
    const {state} = useFetchForDetail(id, 'people');
    // console.log(state);
    return (
        <div>
            <BackButton type='people'/>
            <h1>{id}</h1>
            <p>Name: {state.name}</p>
            <p>Height: {state.height}</p>
            <p>Mass: {state.mass}</p>
            <p>Hair Color: {state.hair_color}</p>
            <p>Skin Color: {state.skin_color}</p>
            <p>Eye Color: {state.eye_color}</p>
            <p>Birth Year: {state.birth_year}</p>

        </div>
    )
}

export default DetailPeople;
