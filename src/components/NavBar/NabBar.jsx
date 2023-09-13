import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../imagenes/01_Logotipo_Claro.png"

    function NavBar() {
      return (
        <> <div id="texto">
          <img id="img-evermeet" src={logo} alt="LOGO" />
        </div>
        <nav id="texto" className="navbar navbar-expand-lg navbar-black bg-black">
          <div className="container">
            <a className="navbar-brand" href="#" id="texto">Evermeet Tienda</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="texto" className="navbar-toggler-icon-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a id="texto" className="nav-link" href="#">Camisetas</a>
                </li>
                <li className="nav-item">
                  <a id="texto" className="nav-link" href="#">Micelanea</a>
                </li>
                <li className="nav-item">
                  <a id="texto" className="nav-link" href="#">Hardware</a>
                </li>
                <li className="nav-item">
                  <a id="texto" className="nav-link" href="#">Abrigo</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <CartWidget />
          </div>
        </nav></>
      );
    }
    
export default NavBar