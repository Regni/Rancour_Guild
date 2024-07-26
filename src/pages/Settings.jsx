import React from "react";
import AddRaider from "../components/AddRaider";
import SetSettings from "../components/SetSettings";

const Settings = () => {
  return (
    <section>
      <div>
        <h2>Settings</h2>
        <AddRaider />
      </div>
      <div>
        <h3>Key Settings</h3>
        <SetSettings />
      </div>
    </section>
  );
};

export default Settings;
