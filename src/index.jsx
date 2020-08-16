import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ClientContext, GraphQLClient } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://api.github.com/graphql",
  headers: {
    authorization: "bearer 10b58b30446b03e30ec2e8e4d471098e5292c64e",
  },
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById("root")
);
