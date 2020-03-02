import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Contact from "../components/Contact";

export default function DoctorSchedule() {
  const [currentDoctor, set_currentDoctor] = useState([]);
  const [status, set_status] = useState("");

  async function doctors() {
    let data;

    set_status("Loading...");

    try {
      data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );

      set_currentDoctor(data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
    set_status("");
  }

  useEffect(() => {
    doctors();
  }, []);

  return (
    <div>
      <NavigationBar />
      <h1>Who is on duty?</h1>
      <p>{status}</p>
      <table className="onDutySchedule">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>availability</th>
          </tr>
        </thead>
        <tbody>
          {currentDoctor.map(doctor => {
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
