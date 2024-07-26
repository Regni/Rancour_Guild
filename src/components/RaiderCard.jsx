import React from "react";
import styles from "../styling/RaiderCard.module.css";
import ChangeRole from "./ChangeRole";
import ChangeRank from "./ChangeRank";
import { useAuthHeader } from "../hooks/useAuthHeader";
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

  console.log(useAuthHeader());
  //gets the last keys

  const weeklies = Object.keys(raider.weeklyKeysDone);
  const lastWeeklyDone = raider.weeklyKeysDone[weeklies[weeklies.length - 1]];
  const mount = raider.troubleFree;
  return (
    <div className={styles.cardContainer} id={raider._id}>
      <img src={raider.thumbnail} alt="Raiders thumbnail" />
      <p>Name: {raider.name}</p>
      {!user ? (
        <p>Rank: {raider.rank}</p>
      ) : (
        <ChangeRank raiderName={raider.name} currentRank={raider.rank} />
      )}
      {!user ? (
        <p>Role: {raider.role}</p>
      ) : (
        <ChangeRole raiderName={raider.name} currentRole={raider.role} />
      )}
      {user && <p>Weekly done: {lastWeeklyDone ? "✔️" : "❌"} </p>}
      {user && <p>Able to get the mount: {mount ? "✔️" : "❌"}</p>}
      {user && <button onClick={handleDelete}>Delete raider</button>}
    </div>
  );
};

export default RaiderCard;
