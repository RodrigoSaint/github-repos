import React from "react";
import { useQuery } from "graphql-hooks";
import "./App.css";

const QUERY = `
  query ($username: String!) { 
    user(login: $username){
      bio
      repositories(first: 10) {
        nodes {
          name
          description
        }
      }
    }
  }
`;

function App() {
  const [username, setUsername] = React.useState();
  const [variables, setVariables] = React.useState();
  const { data, loading } = useQuery(QUERY, { variables });
  const updateUserName = React.useCallback(
    (event) => setUsername(event.target.value),
    []
  );

  const search = React.useCallback(() => setVariables({ username }), [
    username,
  ]);

  return (
    <div className="App">
      <input onChange={updateUserName} />
      <button disabled={!username || loading} onClick={search}>
        Search
      </button>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
