import React, { useCallback, useEffect, useState } from "react";
import "../styling/Raiders.css";
const RaiderCard = ({ raider, handleRaiderData }) => {
  const [mythicDungeonsDone, setMythicDungeonsDone] = useState([]);

  const [loading, setLoading] = useState(true);

  const getRaiderData = useCallback(async () => {
    try {
      await fetch(
        `https://raider.io/api/v1/characters/profile?region=eu&realm=${raider.character.realm}&name=${raider.character.name}&fields=mythic_plus_weekly_highest_level_runs`
      )
        .then((respons) => respons.json())
        .then((raiderSpecificData) => {
          const mythicPlus =
            raiderSpecificData.mythic_plus_weekly_highest_level_runs;
          const raiderThumbnail = raiderSpecificData.thumbnail_url;

          handleRaiderData(raider, { mythicPlus: mythicPlus });
          handleRaiderData(raider, { thumbnail: raiderThumbnail });
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getRaiderData();
  }, []);

  function handleRaiderIoLink() {
    window.open(raider.character.profile_url, "_blank");
  }

  function formateDate(raiderDate) {
    const date = new Date(raiderDate);
    const formattedDate = date.toLocaleDateString("nl-NL");
    const formattedTime = date.toLocaleTimeString("se-SE", {
      hour12: false,
    });
    return (
      <p className="updateTime">
        updated: {formattedTime.slice(0, -3)} on {formattedDate}
      </p>
    );
  }

  return (
    <div onClick={handleRaiderIoLink} className="raiderCard">
      {loading ? (
        <div className="raiderLoading">
          <h3>{raider.character.name}</h3>
          <p>loading...</p>
        </div>
      ) : (
        <>
          <img
            src={raider.thumbnail}
            alt={`${raider.character.name}'s picture`}
            className="raiderAvatar"
          />
          <div className="raiderInfo">
            <h3>{raider.character.name}</h3>
            <p>
              {raider.character.active_spec_role}:{" "}
              {raider.character.active_spec_name} <br />{" "}
            </p>
            {raider.mythicPlus.length > 0 ? (
              <div>&#x2705; {raider.mythicPlus.length}</div>
            ) : (
              <div>&#x274C; </div>
            )}
            {formateDate(raider.character.last_crawled_at)}
          </div>
        </>
      )}
    </div>
  );
};

export default RaiderCard;
