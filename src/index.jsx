import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ClientContext, GraphQLClient } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://api.github.com/graphql",
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GIHUB_TOKEN}`,
  },
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById("root")
);
