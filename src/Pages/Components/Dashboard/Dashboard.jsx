import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const location = useLocation();
  // const history = useNavigate();
  // history("/dashboard");
  // console.log(location);
  return (
    <div>
      <h4>Welcome to Dashboard</h4>
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
}
