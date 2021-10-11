import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
// Action
import {renderPeople} from '../../actions/Page';

// Hook
import BackButton from "../BackButton/ButtonBack";

const DetailPeople = () => {
    const listDetailPeople = useSelector(state => state.people.list);
    const dispatch = useDispatch();
    const { id } = useParams();
    // const { state } = useFetchForDetail(id, 'people');
    // console.log(listDetailPeople[0]);


    const action = renderPeople();
    dispatch(action);

    return (
        <div>
            <BackButton type='people'/>
            <h1>{id}</h1>
            <p>Name: {listDetailPeople[id-1].name}</p>
            <p>Height: {listDetailPeople[id-1].height}</p>
            <p>Mass: {listDetailPeople[id-1].mass}</p>
            <p>Hair Color: {listDetailPeople[id-1].hair_color}</p>
            <p>Skin Color: {listDetailPeople[id-1].skin_color}</p>
            <p>Eye Color: {listDetailPeople[id-1].eye_color}</p>
            <p>Birth Year: {listDetailPeople[id-1].birth_year}</p>

        </div>
    )
}

export default DetailPeople;
