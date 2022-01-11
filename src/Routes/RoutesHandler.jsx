import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
// import Logout from "../Components/Logout/Logout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";

export default function RoutesHandler() {
  //   const dashboard = [<Dashboard />];

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Route>
    </Routes>
  );
}
