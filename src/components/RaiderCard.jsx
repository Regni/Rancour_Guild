import React from "react";
import styles from "../styling/RaiderCard.module.css";
const RaiderCard = ({ raider, user, fetchRaiderList }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/raiders/${raider.name}`,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("something is wrong");
      }

      if (response.ok) {
        fetchRaiderList();
      }
    } catch (err) {}
  };
  //gets the last keys

  const weeklies = Object.keys(raider.weeklyKeysDone);
  const lastWeeklyDone = raider.weeklyKeysDone[weeklies[weeklies.length - 1]];

  return (
    <div className={styles.cardContainer} id={raider._id}>
      <img src={raider.thumbnail} alt="Raiders thumbnail" />
      <p>Name: {raider.name}</p>
      <p>Rank: {raider.rank}</p>
      <p>Role: {raider.role}</p>
      {user && <p>Weekly done: {lastWeeklyDone ? "✔️" : "❌"} </p>}
      {user && <button onClick={handleDelete}>Delete raider</button>}
    </div>
  );
};

export default RaiderCard;
