import React from "react";

const ContentBox = ({ header, body }) => {
  return (
    <>
      <div>
        <p>{header}</p>
        <p>{body}</p>
      </div>
    </>
  );
};
export default ContentBox;
