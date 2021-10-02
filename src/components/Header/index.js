import './Header.styles.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header-container">
            <h1>StarWars Galaxy</h1>

            <ul className="dashboard">
                <li>
                    <Link to='/people'>People</Link>
                </li>
                <li>
                    <Link to='/ships'>Ships</Link>
                </li>
                <li>
                    <Link to='/planets'>Planets</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;
