import React from "react";
import "../styles/styles.scss";

export default function(props) {
  return (
    <div className="patientCard">
      <div>
        <p>Name: {props.name}</p>
        <p>Id: {props.id}</p>
        <p>Date of birth: {props.dateOfBirth}</p>
        <button>Show details</button>
        <div className="extraInfo">
          <p>Email: {props.email}</p>
          <p>Phone number {props.phoneNumber}</p>
          <p>Gender {props.gender}</p>
          <p>prescriptions {props.prescriptions}</p>
        </div>
      </div>
    </div>
  );
}

// `email`, `phoneNumber`, `gender` & `prescriptions`
