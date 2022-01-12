import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Context/AuthContext";

export default function Navbar() {
  const { isAuth, handleSignout } = React.useContext(AuthContext);
  const links = [
    {
      to: "/",
      title: "Home",
      id: nanoid(),
    },
  ];
  const handleLogout = () => {
    handleSignout();
  };
  return (
    <div className="Navbar">
      {links.map(({ to, title, id }) => {
        return (
          <Link to={to} key={id}>
            {title}
          </Link>
        );
      })}
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
