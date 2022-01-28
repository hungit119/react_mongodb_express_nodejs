import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import CoursesContextProvider from "./store/context/CoursesContext";
import { GoogleAuthProvider } from "./components/Auth/google/GoogleLogin";

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <CoursesContextProvider>
        <App />
      </CoursesContextProvider>
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
