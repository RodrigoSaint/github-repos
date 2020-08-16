import React from "react";
import { useQuery } from "graphql-hooks";

import UserDisplay from "./components/UserDisplay";
import Loading from "./components/Loading";
import RepositoryList from "./components/RepositoryList";
import ErrorDisplay from "./components/ErrorDisplay";

import "./App.css";

const QUERY = `
  query ($username: String!, $before: String, $after: String, $first: Int, $last: Int) { 
    user(login: $username){
      name
      bio
      avatarUrl
      repositories(first: $first, last: $last, before: $before, after: $after) {
        nodes {
          name
          description
          url
          primaryLanguage {
            name
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
    }
  }
`;

function App() {
  const [username, setUsername] = React.useState("rodrigosaint");
  const [variables, setVariables] = React.useState({ username, first: 9 });
  const { data, loading, error } = useQuery(QUERY, { variables });
  const updateUserName = React.useCallback(
    (event) => setUsername(event.target.value),
    []
  );

  const search = React.useCallback(
    (event) => {
      setVariables({ username, first: 9 });
      event.preventDefault();
    },
    [username]
  );

  const goToNextPage = React.useCallback(
    (event) => {
      setVariables({
        ...variables,
        before: null,
        last: null,
        first: 9,
        after: data.user.repositories.pageInfo.endCursor,
      });
      event.preventDefault();
    },
    [data, variables]
  );

  const goToPreviousPage = React.useCallback(
    (event) => {
      setVariables({
        ...variables,
        after: null,
        first: null,
        last: 9,
        before: data.user.repositories.pageInfo.startCursor,
      });
      event.preventDefault();
    },
    [data, variables]
  );

  return (
    <Loading isLoading={loading}>
      <div className="App">
        <form onSubmit={search}>
          <label className="App-label" htmlFor="username-input">
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
        {data && data.user && (
          <>
            <UserDisplay user={data.user} />
            <RepositoryList
              repositoryCollection={data.user.repositories.nodes}
              user={data.user}
            />
            <div className="App-pagination">
              <button
                className="App-paginationButton"
                onClick={goToPreviousPage}
                disabled={!data.user.repositories.pageInfo.hasPreviousPage}
              >
                Previous Page
              </button>
              <button
                className="App-paginationButton"
                onClick={goToNextPage}
                disabled={!data.user.repositories.pageInfo.hasNextPage}
              >
                Next Page
              </button>
            </div>
          </>
        )}
        {error && <ErrorDisplay />}
      </div>
    </Loading>
  );
}

export default App;
