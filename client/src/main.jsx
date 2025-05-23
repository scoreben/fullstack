import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./context/StoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <>
      <App />
      <Toaster />
    </>
  </StoreProvider>
);
