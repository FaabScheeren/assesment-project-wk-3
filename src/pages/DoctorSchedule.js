import React from "react";
import NavigationBar from "../components/NavigationBar";
import Contact from "../components/Contact";

export default function DoctorSchedule() {
  return (
    <div>
      <NavigationBar />
      <h1>Who is on duty?</h1>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>availability</th>
          </tr>
        </thead>
      </table>
      <Contact />
    </div>
  );
}
