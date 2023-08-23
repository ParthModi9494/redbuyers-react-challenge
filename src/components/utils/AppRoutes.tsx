import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../Home";
import Login from "../Login";
import BrowseHomes from "../BrowseHomes";
import RequireAuth from "./RequireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/browse-homes"
        element={
          <RequireAuth redirectTo="/login">
            <BrowseHomes />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
