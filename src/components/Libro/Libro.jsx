import "./Libro.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "styled-components";

const Libro = ({ libro }) => {
  const Titulo = styled.h2`
    display: block;
    padding: 0;
    color: blue;
    margin: 0;
    flex-basis: 100%;
  `;

  const [miClase, setMiClase] = useState("default");

  return (
    <>
      <div className={"card col-md-3 " + miClase}>
        <div className="card-body">
          <h5 className="card-title h-25">{libro.titulo}</h5>
          <p className="card-text h-25">Publicado en {libro.publicado}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setMiClase("seleccionado");
            }}
          >
            Seleccionar
          </button>
        </div>
      </div>
    </>
  );
};

Libro.propTypes = {
  libro: PropTypes.object.isRequired,
};

export default Libro;
