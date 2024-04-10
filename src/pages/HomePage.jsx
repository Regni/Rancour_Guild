import React from "react";
import Progress from "../components/Progress";
const HomePage = () => {
  return (
    <div className="contentContainer">
      <div>
        <h1>Rancour Guild</h1>
      </div>
      <Progress/>
      <div>
        <h2>About us</h2>
      </div>
    </div>
  );
};

export default HomePage;
