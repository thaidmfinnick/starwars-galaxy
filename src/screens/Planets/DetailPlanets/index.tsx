import { useParams } from "react-router"
import { useSelector } from 'react-redux';
import BackButton from "../../../components/BackButton";
import { State } from "../../../redux-saga/reducers";
import './styles.scss'

const DetailPlanets = () => {

    const listDetailPlanets = useSelector((state: State) => state.planets.list);
    const { id }: any = useParams();
    // console.log(listDetailPlanets);
    return (
        <div className='DetailPlanets'>
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
