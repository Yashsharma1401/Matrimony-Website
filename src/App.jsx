import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./components/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      
      {/* You can add more routes here */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
