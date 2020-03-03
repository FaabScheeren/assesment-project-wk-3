import React, { useState } from "react";
import "../styles/PatientSignup.scss";

export default function PatientSignup() {
  const patient = {
    firstname: "",
    lastname: "",
    mail: "",
    phoneNumber: "",
    gender: "woman",
    dateOfBirth: ""
  };
  const [patientInfo, set_patientInfo] = useState(patient);
  const [succesMesage, set_succesMessage] = useState("");

  const handleInputChange = e =>
    set_patientInfo({
      ...patientInfo,
      [e.currentTarget.name]: e.currentTarget.value
    });

  function submitHandler(e) {
    e.preventDefault();
    console.log("This is the form submit:", patientInfo);
    set_succesMessage("You succesfully send this form!");
  }

  return (
    <div id="signupForm" className="container">
      <h1>Patient signup</h1>
      <p>All fields are required!</p>
      <form className="signupForm" onSubmit={submitHandler}>
        <div>
          <label>Firstname</label>
          <input
            value={patientInfo.firstname}
            name="firstname"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Lastname</label>
          <input
            required
            value={patientInfo.lastname}
            name="lastname"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            required
            value={patientInfo.mail}
            name="mail"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            required
            value={patientInfo.phoneNumber}
            name="phoneNumber"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            required
            value={patientInfo.gender}
            name="gender"
            onChange={handleInputChange}
          >
            <option value="woman">Woman</option>
            <option value="men">Men</option>
          </select>
        </div>
        <div>
          <label>Date of birth</label>
          <input
            required
            type="date"
            value={patientInfo.dateOfBirth}
            name="dateOfBirth"
            onChange={handleInputChange}
          />
        </div>
        <input required type="submit" className="submitButton" />
      </form>
      <p>{succesMesage}</p>
    </div>
  );
}
