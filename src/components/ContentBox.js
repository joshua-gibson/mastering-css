import React from "react";

const ContentBox = ({ header, body }) => {
  return (
    <>
      <div>
        <h2>{header}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};
export default ContentBox;
