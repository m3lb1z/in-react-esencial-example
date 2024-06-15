import "./Libro.css";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const Libro = ({ libro }) => {
  const Titulo = styled.h2`
    display: block;
    padding: 0;
    color: blue;
    margin: 0;
    flex-basis: 100%;
  `;

  return (
    <>
      <div className="item">
        <Titulo>{libro.titulo}</Titulo>
        <span>Publicado en {libro.publicado}</span>
      </div>
    </>
  );
};

Libro.propTypes = {
  libro: PropTypes.object.isRequired,
};

export default Libro;
