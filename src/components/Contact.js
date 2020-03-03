import React from "react";

export default function() {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const currentTime = `${hour}:${minutes}`;
  const word = hour < 8 || hour >= 17 ? "closed" : "open";

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
