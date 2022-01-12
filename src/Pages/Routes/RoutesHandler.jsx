import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Dashboard from "../Components/Dashboard/Dashboard";
import Settings from "../Components/Settings/Settings";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
