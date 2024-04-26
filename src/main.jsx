import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-dnhfet0t6005r8e1.us.auth0.com"
    clientId="1NuKAZiQH0O9V2U5usDa9XFK9wbeHyPh"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
