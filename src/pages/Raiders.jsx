import React, { useEffect, useState } from "react";
import oldRaiderCard from "../components/oldRaiderCard";
import RaiderCard from "../components/RaiderCard";

import "../styling/Raiders.css";
const Raiders = () => {
  const [raiders, setRaiders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    const fetchRaiderList = async () => {
      try {
        await fetch("http://localhost:5000/api/v1/raiders/")
          .then((respons) => {
            if (!respons.ok) {
              throw new Error("network connection error");
            }
            return respons.json();
          })
          .then((data) => {
            console.log(data);
            return setRoster(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRaiderList();
  }, []);

  const handleRaiderData = (raider, newData) => {
    // const raiderList = raiders.map((currentRaider) =>
    //   currentRaider.character.name === raider.character.name
    //     ? { ...currentRaider, ...newData }
    //     : currentRaider
    // );

    // setRaiders(raiderList);
    setRaiders((prevRaiders) =>
      prevRaiders.map((currentRaider) =>
        currentRaider.character.name === raider.character.name
          ? { ...currentRaider, ...newData }
          : currentRaider
      )
    );
  };

  return (
    <div className="contentContainer raidCardContainer">
      {roster.map((raider) => (
        <RaiderCard raider={raider} key={raider._id} />
      ))}
    </div>
  );
};

export default Raiders;
