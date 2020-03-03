import React, { useState } from "react";
import "../styles/styles.scss";

export default function(props) {
  const [details, set_details] = useState(false);

  function toggleDetails() {
    set_details(!details);
  }

  return (
    <div className="patientCard">
      <div>
        <p>Name: {props.name}</p>
        <p>Id: {props.id}</p>
        <p>Date of birth: {props.dateOfBirth}</p>
        {details && (
          <div>
            <p>Email: {props.email}</p>
            <p>Phone number {props.phoneNumber}</p>
            <p>Gender {props.gender}</p>
            <p>prescriptions: {props.prescriptions.join(", ")}</p>
          </div>
        )}
        <button onClick={toggleDetails}>Show details</button>
      </div>
    </div>
  );
}
