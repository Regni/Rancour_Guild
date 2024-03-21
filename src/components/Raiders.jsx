import React, { useEffect, useState } from "react";
import RaiderCard from "./RaiderCard";

import "./Raiders.css";
const Raiders = () => {
  const [raiders, setRaiders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState();
  const officers = [
    "Regnii",
    "Nanamiao",
    "Spotthedrake",
    "Rickiy",
    "Wotsitz",
    "Shurkian",
  ];
  useEffect(() => {
    const fetchRaiderList = async () => {
      try {
        await fetch(
          "https://raider.io/api/v1/guilds/profile?region=eu&realm=draenor&name=Rancour&fields=members"
        )
          .then((respons) => respons.json())
          .then((data) =>
            setRaiders(
              data.members.filter(
                (raider) =>
                  raider.rank == 4 ||
                  raider.rank == 5 ||
                  officers.includes(raider.character.name)
              )
            )
          );
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
      {raiders.map((raider) => (
        <RaiderCard
          raider={raider}
          handleRaiderData={handleRaiderData}
          key={raider.character.name}
        />
      ))}
    </div>
  );
};

export default Raiders;
