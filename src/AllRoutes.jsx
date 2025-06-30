import React from "react";
import { Routes, Route } from "react-router-dom"; // Make sure to import these
import Home from "./Home";
import Admin from "./components/Admin";


const ALLRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      
      {/* You can add more routes here */}
    </Routes>
  );
};

export default ALLRoutes;
