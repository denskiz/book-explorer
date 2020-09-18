import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Fragment>
  );
};

export default Spinner;
