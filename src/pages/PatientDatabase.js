import React, { useState, useEffect } from "react";
import PatientCard from "../components/PatientCard";

export default function(props) {
  const [sortBy, set_sortBy] = useState("");
  const patients = props.patients;

  function sortLastName(patient_a, patient_b) {
    return patient_a.lastName.localeCompare(patient_b.lastName);
  }

  function filterHandler(e) {
    set_sortBy(e.target.value);
  }

  const patientsSorted = [...patients].sort(sortLastName);

  function filterOnDoctor(patient) {
    if (patient.doctorId == sortBy) {
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
    <div>
      <h1>Patient database</h1>
      <p>{props.status}</p>
      <select onChange={filterHandler}>
        <option>Make a choose</option>
        <option value={1}>Dr. Coverntry</option>
        <option value={2}>Dr. Adenet</option>
        <option value={3}>Dr. Tollady</option>
        <option value={"All"}>All</option>
      </select>
      {patientsSorted.map(filterOnDoctor)}
    </div>
  );
}
