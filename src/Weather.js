import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState("");
  //let written = "It is currently 20°C in";
  let [written, setWritten] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function submitButton(event) {
    event.preventDefault();
    setWritten(`It is currently 24°C in ${city}`);
  }

  return (
    <div>
      <form onSubmit={submitButton}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{written}</h2>
    <p>
    <a href="https://github.com/Li1412/weather-react" target="_blank" rel="noreferrer">Open-source </a>{" "}coded by Lindelwa Tshuku
      </p>
      </div>
  );
}
