import React from "react";
const Display = (props) => {
  return (
    <>
      {isNaN(props.main) ? (
        <h1 style={{ backgroundColor: props.bgColor, color: props.color }}>
          The word is: {props.main}
        </h1>
      ) : (
        <h1 style={{ backgroundColor: props.bgColor, color: props.color }}>
          The number is: {props.main}
        </h1>
      )}
    </>
  );
};

export default Display;
