import React from "react";


function IconeCarrinho(props) {
  const { total } = props;
  const badge = {
    display: "inline-block",
    padding: ".5em .0,5em",
    fontSize: "50%",
    fontWeight: 70,
    lineHeight: 1,
    textAlign: "right",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",

  };

  return (
    <div>
      <h2>
        🛒<span style={badge}>{total || "0"}</span>
      </h2>
    </div>
  ); 
}

export default IconeCarrinho;