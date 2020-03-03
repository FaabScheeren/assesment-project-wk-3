import React, { useState } from "react";
import "../styles/styles.scss";

export default function(props) {
  const [details, set_details] = useState(false);
  const [buttonContent, set_buttonContent] = useState("Show details");

  function toggleDetails() {
    if (details === false) {
      set_buttonContent("Hide details");
    } else if (details === true) {
      set_buttonContent("Show details");
    }

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
        <button onClick={toggleDetails}>{buttonContent}</button>
      </div>
    </div>
  );
}
