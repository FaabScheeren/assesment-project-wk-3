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
  const [currentDoctor, set_currentDoctor] = useState([]);
  const [statusDoctor, set_statusDoctor] = useState("");
  const [patients, set_patients] = useState([]);
  const [statusPatient, set_statusPatient] = useState("");

  // Function to get the data of the doctors
  async function doctors() {
    set_statusDoctor("Loading...");

    try {
      const data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );

      set_currentDoctor(data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
    set_statusDoctor("");
  }

  useEffect(() => {
    doctors();
  }, []);

  // Function to get the data of the patients
  async function getPatients() {
    set_statusPatient("Loading...");
    try {
      const data = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      set_patients(data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
    set_statusPatient("");
  }

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" component={Homepage} exact={true}></Route>
        <Route path="/schedule">
          <DoctorSchedule currentDoctor={currentDoctor} status={statusDoctor} />
        </Route>
        <Route path="/database">
          <PatientDatabase
            patients={patients}
            status={statusPatient}
            currentDoctor={currentDoctor}
          />
        </Route>
        <Route path="/signup" component={PatientSignup}></Route>
      </Switch>
    </div>
  );
}
