import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import NextRole from "./NextRole";
import "./styles/nextRole.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const app = <NextRole authEnabled={Boolean(googleClientId)} />;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {googleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>
        {app}
      </GoogleOAuthProvider>
    ) : (
      app
    )}
  </StrictMode>
);
