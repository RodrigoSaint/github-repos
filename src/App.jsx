import React from "react";
import PropTypes from "prop-types";
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

const RepositoryList = ({ repositoryCollection }) => {
  return (
    <div className="RepositoryList">
      {repositoryCollection.map((r) => (
        <div className="RepositoryList-item" key={r.name}>
          <div className="RepositoryList-itemHeader">{r.name}</div>
          <p className="RepositoryList-itemDescription">
            {r.description || "No description provided"}
          </p>
        </div>
      ))}
    </div>
  );
};

RepositoryList.propTypes = {
  repositoryCollection: PropTypes.array,
};

function App() {
  const [username, setUsername] = React.useState("rodrigosaint");
  const [variables, setVariables] = React.useState({ username });
  const { data, loading } = useQuery(QUERY, { variables });
  const updateUserName = React.useCallback(
    (event) => setUsername(event.target.value),
    []
  );

  const search = React.useCallback(
    (event) => {
      setVariables({ username });
      event.preventDefault();
    },
    [username]
  );

  return (
    <div className="App">
      <form onSubmit={search}>
        <label className="App-label" for="username-input">
          Username
        </label>
        <div className="App-inputArea">
          <input
            id="username-input"
            className="App-input"
            value={username}
            onChange={updateUserName}
          />
          <button
            className="App-searchButton"
            disabled={!username || loading}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      {data && (
        <RepositoryList repositoryCollection={data.user.repositories.nodes} />
      )}
    </div>
  );
}

export default App;
