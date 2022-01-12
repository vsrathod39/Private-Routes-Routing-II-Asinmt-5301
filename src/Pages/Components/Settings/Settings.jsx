import React from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const history = useNavigate();
  return (
    <div>
      <h3>Config/Settings</h3>
      <button
        onClick={() => {
          history("/dashboard");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
