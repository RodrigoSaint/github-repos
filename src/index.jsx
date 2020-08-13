import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ClientContext, GraphQLClient } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://api.github.com/graphql",
  headers: {
    authorization: "bearer 38f2402679e0794cf0b5872f8fc7bf96e16307d1",
  },
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById("root")
);
