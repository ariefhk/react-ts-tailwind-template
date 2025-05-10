import "./styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutePages from "./components/routing/route-pages";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  </StrictMode>
);
