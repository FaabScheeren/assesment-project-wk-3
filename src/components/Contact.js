import React from "react";

export default function() {
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const m = checkTime(minutes);
  const currentTime = `${hour}:${m}`;
  const word = hour < 8 || hour >= 17 ? "closed" : "open";

  // const OfficeHours = () => {
  //   if (hour > 16) {
  //     return "closed";
  //   } else if (hour === 14 && minutes <= 22) {
  //     return "closed";
  //   } else {
  //     return "open";
  //   }
  // };

  return (
    <div>
      <p>
        We are <strong>{word}</strong>
        <br />
        Current time: {currentTime}
      </p>
      <p>
        To make an appointment
        <br />
        <br />
        call: 020 555 5555
      </p>
    </div>
  );
}
