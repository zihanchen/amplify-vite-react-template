import React from "react";
import ReactDOM from "react-dom/client";
import IntroTabs from "./IntroTabs.tsx";
import "./index.css";
import "./IntroTabs.css"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <IntroTabs />
  </React.StrictMode>
);
