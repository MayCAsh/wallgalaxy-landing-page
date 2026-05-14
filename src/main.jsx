import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WallGalaxyLandingPage from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WallGalaxyLandingPage />
  </React.StrictMode>
);
