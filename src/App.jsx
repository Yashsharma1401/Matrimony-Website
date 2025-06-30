import React from "react";
import { BrowserRouter } from "react-router-dom";
import ALLRoutes from "./ALLRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ALLRoutes />
    </BrowserRouter>
  );
};

export default App;
