import { useParams } from "react-router"
import { useSelector, useDispatch } from 'react-redux';
import BackButton from "../../../components/BackButton";
import { State } from "../../../redux-saga/reducers";
import './styles.scss'

const DetailPeople = () => {

    const listDetailPeople = useSelector((state: State) => state.people.list);
    const { id }: any = useParams();
    // console.log(listDetailPeople);
    return (
        <div className='DetailPeople'>
            <BackButton type='people'/>
            <h1>{id}</h1>
            <p>{listDetailPeople[id-1].name}</p>
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
