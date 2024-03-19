import React from "react";

const MythicDungeonCheck = ({ dungeonsDone }) => {
  return (
    <div>{dungeonsDone.length > 0 ? <div>$#x2713</div> : <div>test</div>}</div>
  );
};

export default MythicDungeonCheck;
