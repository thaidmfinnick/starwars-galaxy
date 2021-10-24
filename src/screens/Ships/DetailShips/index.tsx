import { useParams } from "react-router"
import { useSelector } from 'react-redux';
import BackButton from "../../../components/BackButton";
import { State } from "../../../redux-saga/reducers";
import './styles.scss'

const DetailShips = () => {

    const listDetailShips = useSelector((state: State) => state.ships.list);
    const { id }: any = useParams();
    return (
        <div className='DetailShips'>
            <BackButton type='ships'/>
            <h1>{id}</h1>
            <p>Name: {listDetailShips[id-1].name}</p>
            <p>Model: {listDetailShips[id-1].model}</p>
            <p>Manufacturer: {listDetailShips[id-1].manufacturer}</p>
            <p>MGLT: {listDetailShips[id-1].MGLT}</p>
            <p>Consumables: {listDetailShips[id-1].consumbables}</p>
            <p>Cost in credits: {listDetailShips[id-1].cost_in_credits}</p>
            <p>Crew: {listDetailShips[id-1].crew}</p>
        </div>
    )
}

export default DetailShips;
