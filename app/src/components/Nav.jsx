import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <>
            <nav className="nav">
                <ul className="lista">
                    <li className="tel"><NavLink to="Telephones"><h1 className="telefonos">Catalogo de telefonos</h1></NavLink></li>
                    
                </ul>
            </nav>
            <nav className="relleno"></nav>
        </>
    )
}

export default Nav;