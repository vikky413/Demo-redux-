import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
   const state = useSelector((state)=> state.handleAmount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            Your Wallet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Credit 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Dabit
                </a>
              </li>
             
            </ul>
            <button className="btn btn-primary">Balance : {state} </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
