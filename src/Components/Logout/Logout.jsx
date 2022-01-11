import React from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Logout() {
  const { handleSignout } = React.useContext(AuthContext);
  handleSignout();
  return <></>;
}
