import { Link } from "react-router-dom"
import "./Header.css"
import Spoon from '../assets/Spoon.png';

export const Header = () => {
// const logo = "./Spoon.png"

    return(
        <header>
            <div className="logo_title">
            <Link to={`/`}>
            <img src={Spoon} alt="spoon" />
            <h1>The spoon</h1>
            </Link>
            </div>
            <Link to={`/favorites`}>
            <button>Favorites</button>
            </Link>
        </header>
    )
} 