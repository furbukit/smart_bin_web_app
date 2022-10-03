import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

import {
  DynamoDBClient,
  BatchExecuteStatementCommand,
} from "@aws-sdk/client-dynamodb";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const REGION = "ap-southeast-2";

const client = new DynamoDBClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
    identityPoolId: "IDENTITY_POOL_ID",
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
