import React from "react";
import PropTypes from "prop-types";

import "./UserDisplay.css";

const UserDisplay = ({ user }) => {
  return (
    <div className="UserDisplay">
      <img
        className="UserDisplay-avatar"
        src={user.avatarUrl}
        alt={user.name}
      />
      <div>
        <div className="UserDisplay-name">{user.name}</div>
        <div className="UserDisplay-bio">{user.bio}</div>
      </div>
    </div>
  );
};

UserDisplay.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDisplay;
