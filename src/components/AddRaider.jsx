import React, { useState } from "react";

const AddRaider = ({ fetchRaiderList }) => {
  const [name, setName] = useState("");
  const [realm, setRealm] = useState("Draenor");
  const [role, setRole] = useState("Dps");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const raider = { name, realm, role };
    const response = await fetch("http://localhost:5000/api/v1/raiders/", {
      method: "POST",
      body: JSON.stringify(raider),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      return;
    }
    await fetchRaiderList();
    setError(null);
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="raiderName">Name</label>
        <input
          type="text"
          name=""
          id="raiderName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="raiderRealm">Realm</label>
        <input
          type="text"
          name=""
          id="raiderRealm"
          placeholder="Draenor"
          value={realm}
          onChange={(e) => setRealm(e.target.value)}
        />
        <label htmlFor="role">Choose a role:</label>
        <select id="role" name="role" onChange={(e) => setRole(e.target.value)}>
          <option value="Dps">Dps</option>
          <option value="Tank">Tank</option>
          <option value="Healer">Healer</option>
        </select>
        <input type="submit" value="Send!" />
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};

export default AddRaider;
