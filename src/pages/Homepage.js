import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import "../styles/Homepage.scss";

export default function Homepage() {
  return (
    <div className="container">
      <h1>Welcom to AMS GPs</h1>
      <Contact />

      <button className="callToAction">
        <Link to="/schedule">Who is on duty?</Link>
      </button>
      <button className="callToAction">
        <Link to="signup">I am a new patiënt</Link>
      </button>
    </div>
  );
}
