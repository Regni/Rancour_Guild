import React, { useState } from "react";
import { useAuthHeader } from "../hooks/useAuthHeader";

const ChangeRole = ({ currentRole, raiderName }) => {
  const [role, setRole] = useState(currentRole);
  const authHeader = useAuthHeader();
  const handleChange = async (e) => {
    await fetch(`http://localhost:5000/api/v1/raiders/${raiderName}`, {
      method: "PATCH",
      body: JSON.stringify({ role: e.target.value }),
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
    });
  };

  return (
    <select
      id={role + raiderName}
      name="role"
      onChange={(e) => {
        setRole(e.target.value);
        handleChange(e);
      }}
    >
      <option value={role}>{role}</option>
      {role !== "Dps" && <option value="Dps">Dps</option>}
      {role !== "Tank" && <option value="Tank">Tank</option>}
      {role !== "Healer" && <option value="Healer">Healer</option>}
    </select>
  );
};

export default ChangeRole;
