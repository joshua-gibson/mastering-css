import React from "react";

const ContentContainer = ({ classes, children }) => {
  return (
    <>
      <div className={`${classes}`}>{children}</div>
    </>
  );
};
export default ContentContainer;
