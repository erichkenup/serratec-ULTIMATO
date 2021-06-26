import React, { useState } from "react";

function TrocaCor(props) {

  let temaEscuro = {
      background: "chocolate",
      color: "#fff"
  }

  let temaClaro = {
      background:"#7445",
      color: "#222"
  }
  const logado = localStorage.getItem("_TOKEN");
  
  return (
    <div style= {logado ? temaEscuro : temaClaro}>{props.children}</div>
  );
}

export default TrocaCor;