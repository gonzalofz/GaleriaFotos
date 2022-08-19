import React from "react";

// Carta.jsx
const Carta = ({ nombre, imagen, historia, key }) => {
  return (
    <div className="card" styles="width: 18rem;" id={key}>
      <center>
        <img
          className="card-img-top"
          src={imagen}
          alt="Card image cap"
          style={{ width: "50%", paddingTop: "15px" }}
        />
      </center>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{historia}</p>
        {/* <a link={imagen} className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default Carta;
