import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import Logo from "../assets/img/logo-pokemon.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-color">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <div className="contenedor-logo-pokemon">
            <img src={Logo} alt="logo-pokemon" />
            </div>
            
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <NavLink className="link-color" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="link-color" to="/pokemon">
                  Pokemon
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
