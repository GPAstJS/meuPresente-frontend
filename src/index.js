import "./assets/styles/index.css";
import "./assets/styles/css-ui-utility-handler.css";

import React from "react";

import ReactDOM from "react-dom/client";

import { App } from "./App";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <IconContext.Provider value={{ size: "32rem" }}>
            <App />
        </IconContext.Provider>
    </React.StrictMode>,
);
