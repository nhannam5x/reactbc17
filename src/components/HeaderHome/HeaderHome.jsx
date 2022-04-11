import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    //b4-navbar-background
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/"}>
        ReactJS
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <NavLink exact to={"/home"} className="nav-link" activeClassName="bg-white text-dark" activeStyle={{textDecoration: 'underline'}}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to={"/about"} className="nav-link" activeClassName="bg-white text-dark" activeStyle={{textDecoration: 'underline'}} >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to={"/contact"} className="nav-link" activeClassName="bg-white text-dark" activeStyle={{textDecoration: 'underline'}}>
              Contact
            </NavLink>
          </li>
          
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
