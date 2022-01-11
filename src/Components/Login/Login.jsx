import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [user, setUser] = React.useState({});
  const { handleSignin, isAuth } = React.useContext(AuthContext);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin(user);
  };
  return !isAuth ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="user name"
          name="user"
        />
        <br />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          name="password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <Navigate replace to="/dashboard" />
  );
}
