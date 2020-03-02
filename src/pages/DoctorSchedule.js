import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "../components/Contact";

export default function DoctorSchedule(props) {
  return (
    <div>
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
