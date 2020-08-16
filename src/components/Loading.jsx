import React from "react";
import PropTypes from "prop-types";

import "./Loading.css";

const Loading = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <>
        {children}
        <div className="Loading">Loading...</div>
      </>
    );
  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
