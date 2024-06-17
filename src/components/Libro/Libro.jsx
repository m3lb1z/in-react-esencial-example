import "./Libro.css";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Componente Libro.
 *
 * Representa un libro en la interfaz de usuario.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.libro - La información del libro.
 * @param {string} props.libro.titulo - El título del libro.
 * @param {number} props.libro.publicado - El año de publicación del libro.
 *
 * @returns {JSX.Element} El componente Libro.
 */
const Libro = ({ libro }) => {
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
