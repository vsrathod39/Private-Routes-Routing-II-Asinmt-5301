import React from "react";
export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  const handleSignin = ({ user, password }) => {
    if (user === "admin" && password === "admin") {
      setIsAuth(true);
      alert("Success");
    } else {
      setIsAuth(false);
      alert("Failed");
    }
  };
  const handleSignout = () => {
    setIsAuth(false);
  };
  const value = { isAuth, handleSignin, handleSignout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
