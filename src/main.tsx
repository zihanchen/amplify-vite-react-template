import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import IntroTabs from "./IntroTabs.tsx";
// import "./IntroTabs.css"
// import App from "./App.tsx"
// import "./App.css"

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IntroTabs />
  </React.StrictMode>
);
