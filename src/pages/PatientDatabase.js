import React, { useState } from "react";
import PatientCard from "../components/PatientCard";
import "../styles/PatientDatabase.scss";

export default function(props) {
  const [sortBy, set_sortBy] = useState("");
  const patients = props.patients;
  const doctors = props.currentDoctor;

  function sortLastName(patient_a, patient_b) {
    return patient_a.lastName.localeCompare(patient_b.lastName);
  }

  function filterHandler(e) {
    const chosen = JSON.parse(e.target.value);
    set_sortBy(chosen);
  }

  const patientsSorted = [...patients].sort(sortLastName);

  function filterOnDoctor(patient) {
    if (patient.doctorId === sortBy) {
      return (
        <PatientCard
          key={patient.id}
          name={`${patient.firstName} ${patient.lastName}`}
          id={patient.id}
          dateOfBirth={patient.dateOfBirth}
          email={patient.email}
          phoneNumber={patient.phoneNumber}
          gender={patient.gender}
          prescriptions={patient.prescriptions}
        />
      );
    } else if (sortBy === "All") {
      return (
        <PatientCard
          key={patient.id}
          name={`${patient.firstName} ${patient.lastName}`}
          id={patient.id}
          dateOfBirth={patient.dateOfBirth}
          email={patient.email}
          phoneNumber={patient.phoneNumber}
          gender={patient.gender}
          prescriptions={patient.prescriptions}
        />
      );
    }
  }

  return (
    <div className="container">
      <h1>Patient database</h1>
      <p>{props.status}</p>
      <p id="doctorToggleName">Doctor:</p>
      <select onChange={filterHandler} id="doctorToggle">
        <option>Make a choose</option>
        {doctors.map(doctor => {
          return (
            <option key={doctor.id} value={doctor.id}>
              {doctor.doctor}
            </option>
          );
        })}
        <option value={"All"}>All</option>
      </select>
      {patientsSorted.map(filterOnDoctor)}
    </div>
  );
}
