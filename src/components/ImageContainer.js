import React from "react";

const ImageContainer = ({ classes, imageName }) => {
  return (
    <>
      <img
        className={`${classes}`}
        src={`./images/${imageName}`}
        alt="alttext"
      />
    </>
  );
};
export default ImageContainer;
