import React, { useEffect, useState } from "react";
import { useAuthHeader } from "../hooks/useAuthHeader";

const SetSettings = () => {
  const [keyLvl, setKeyLvl] = useState(0);
  const [keyAmount, setKeyAmount] = useState(0);

  const fetchSettings = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/settings`);
    if (!response.ok) {
      console.log("something wrong");
    }
    const settings = await response.json();

    setKeyLvl(settings.weeklyLevel);
    setKeyAmount(settings.weeklyRequirement);

    console.log(settings);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const authHeader = useAuthHeader();
  const handleSave = async (e) => {
    e.preventDefault();
    const newSettings = {
      weeklyLevel: Number(keyLvl),
      weeklyRequirement: Number(keyAmount),
    };

    await fetch(`http://localhost:5000/api/v1/settings`, {
      method: "Put",
      body: JSON.stringify(newSettings),
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="weeklyLvl">Key Level: </label>
        <input
          id="weeklyLvl"
          type="number"
          onChange={(e) => setKeyLvl(e.target.value)}
          value={keyLvl}
        />
        <label htmlFor="amountKeys">Amount of keys to be done:</label>
        <input
          id="amountKeys"
          type="number"
          value={keyAmount}
          onChange={(e) => setKeyAmount(e.target.value)}
        />
        <button onClick={handleSave}>save!</button>
      </form>
    </div>
  );
};

export default SetSettings;
