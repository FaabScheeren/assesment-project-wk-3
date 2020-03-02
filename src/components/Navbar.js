import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/schedule">Doctor schedule</NavLink>
        <NavLink to="/database">Patient database</NavLink>
        <NavLink to="/signup">Patient signup</NavLink>
      </div>
    </div>
  );
}
