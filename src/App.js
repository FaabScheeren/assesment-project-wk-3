import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Homepage";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientDatabase from "./pages/PatientDatabase";
import PatientSignup from "./pages/PatientSignup";
import NavigationBar from "./components/NavigationBar";
import "./styles/styles.scss";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/schedule" component={DoctorSchedule} />
        <Route path="/database" component={PatientDatabase} />
        <Route path="/signup" component={PatientSignup} />
      </Switch>
    </div>
  );
}
