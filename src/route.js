import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./component/Login/login";
import { Dashboard } from "./component/Dashboard/dashboard";
import { Math } from "./component/Math/math";
import { Layout } from "./component/layout";

export const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/math" element={<Math />} />
      </Route>
    </Routes>
  );
};
