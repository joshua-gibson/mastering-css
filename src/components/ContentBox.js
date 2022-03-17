import React from "react";

const ContentBox = ({ classes, header, body }) => {
  return (
    <>
      <div className={`${classes}`}>
        <h2>{header}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};
export default ContentBox;
