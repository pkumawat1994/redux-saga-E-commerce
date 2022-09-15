import React from "react";

const Test = () => {
  const openInNewTab = (url) => {
    window.open("http://localhost:3000/arpit", "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div>test</div>
      <button onClick={openInNewTab}>open new tab</button>
    </>
  );
};

export default Test;
