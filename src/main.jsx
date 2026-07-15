import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { TripProvider } from "./context/TripContext";


ReactDOM.createRoot(
    document.getElementById("root")
)
.render(

<BrowserRouter>

<TripProvider>

<App />

</TripProvider>

</BrowserRouter>

);