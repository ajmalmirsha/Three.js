import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

function Demo() {
  return (
    <MantineProvider  >
      <App />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
