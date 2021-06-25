import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//App Challenges
//Need to get a search term from the user
//Need to use that search term to make a request to an outside API and fetch data
//Need to take the fetched images and show them on the screen in a list

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
