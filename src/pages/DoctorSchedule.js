import React from "react";
import Contact from "../components/Contact";
import "../styles/DoctorSchedule.scss";

export default function DoctorSchedule(props) {
  return (
    <div className="container">
      <h1>Who is on duty?</h1>
      <p>{props.status}</p>
      <table className="onDutySchedule">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>availability</th>
          </tr>
        </thead>
        <tbody>
          {props.currentDoctor.map(doctor => {
            const onDuty = doctor.onDuty ? "on duty" : "not on duty";
            return (
              <tr key={doctor.id}>
                <td>{doctor.doctor}</td>
                <td>{onDuty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Contact />
    </div>
  );
}
