import React from "react";
import PropTypes from "prop-types";
import "./RepositoryList.css";

const RepositoryList = ({ repositoryCollection, user }) => {
  return (
    <div className="RepositoryList">
      {repositoryCollection.map((r) => (
        <div className="RepositoryList-item" key={r.name}>
          <div className="RepositoryList-itemHeader">
            <span>{r.name}</span>
            <img
              className="RepositoryList-itemHeaderAvatar"
              alt={user.name}
              src={user.avatarUrl}
            />
          </div>
          {r.primaryLanguage && (
            <div className="RepositoryList-itemLanguage">
              {r.primaryLanguage.name}
            </div>
          )}
          <p className="RepositoryList-itemDescription">
            {r.description || "No description provided"}
          </p>
          <a className="RepositoryList-itemLink" target="blank" href={r.url}>
            Show me details!
          </a>
        </div>
      ))}
    </div>
  );
};

RepositoryList.propTypes = {
  repositoryCollection: PropTypes.array,
};

export default RepositoryList;
