import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🔥 React sta partendo");

const rootEl = document.getElementById("root");
console.log("🔍 root element:", rootEl);

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    // <React.StrictMode>
      <App />
    // </React.StrictMode>
  );
} else {
  console.error("❌ ERRORE: elemento #root non trovato!");
}
