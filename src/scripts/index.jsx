import "../index.html";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const container = document.getElementById("app");
if (!container) {
  throw new Error("Missing container element");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
