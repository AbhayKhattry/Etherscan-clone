import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";

ReactDOM.render(
    <React.StrictMode>
        <DataContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DataContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);


reportWebVitals();
