import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
// Action
import {renderDetailPeople} from '../../actions/Detail';
// Hook
import BackButton from "../BackButton/ButtonBack";
import { useFetchForDetail } from "../../hooks/useFetchForDetail";

const DetailPeople = () => {
    const listDetailPeople = useSelector(state => state.people.detail);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { state } = useFetchForDetail(id, 'people');

    const action = renderDetailPeople(state);
    dispatch(action);

    return (
        <div>
            <BackButton type='people'/>
            <h1>{id}</h1>
            <p>Name: {listDetailPeople.name}</p>
            <p>Height: {listDetailPeople.height}</p>
            <p>Mass: {listDetailPeople.mass}</p>
            <p>Hair Color: {listDetailPeople.hair_color}</p>
            <p>Skin Color: {listDetailPeople.skin_color}</p>
            <p>Eye Color: {listDetailPeople.eye_color}</p>
            <p>Birth Year: {listDetailPeople.birth_year}</p>

        </div>
    )
}

export default DetailPeople;
