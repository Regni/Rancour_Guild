import React, { useEffect, useState } from "react";
import RaiderCard from "../components/RaiderCard";
import AddRaider from "../components/AddRaider";
import "../styling/Raiders.css";
import { useAuthContext } from "../hooks/useAuthContext";
const Raiders = () => {
  const { user } = useAuthContext();
  const [roster, setRoster] = useState([]);

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

  useEffect(() => {
    fetchRaiderList();
  }, []);

  return (
    <>
      <div className="contentContainer raidCardContainer">
        {roster.map((raider) => (
          <RaiderCard
            raider={raider}
            key={raider._id}
            user={user}
            fetchRaiderList={fetchRaiderList}
          />
        ))}
      </div>

      {user && <AddRaider fetchRaiderList={fetchRaiderList} />}
    </>
  );
};

export default Raiders;
