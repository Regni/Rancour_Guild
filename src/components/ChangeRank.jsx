import React, { useState } from "react";
import { useAuthHeader } from "../hooks/useAuthHeader";
const ChangeRank = ({ currentRank, raiderName }) => {
  const [rank, setRank] = useState(currentRank);
  const authHeader = useAuthHeader();
  const handleChange = async (e) => {
    await fetch(`http://localhost:5000/api/v1/raiders/${raiderName}`, {
      method: "PATCH",
      body: JSON.stringify({ rank: e.target.value }),
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
    });
  };
  return (
    <select
      id={rank + raiderName}
      name="rank"
      onChange={(e) => {
        setRank(e.target.value);
        handleChange(e);
      }}
    >
      <option value={rank}>{rank}</option>
      {rank !== "Trial" && <option value="Trial">Trial</option>}
      {rank !== "Raider" && <option value="Raider">Raider</option>}
      {rank !== "Officer" && <option value="Officer">Officer</option>}
    </select>
  );
};

export default ChangeRank;
