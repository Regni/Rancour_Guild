import React from "react";
import styles from "../styling/RaiderCard.module.css";
const RaiderCard = ({ raider }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={raider.thumbnail} alt="Raiders thumbnail" />
      <p>Name: {raider.name}</p>
      <p>Rank: {raider.rank}</p>
      <p>Role: {raider.role}</p>
    </div>
  );
};

export default RaiderCard;
