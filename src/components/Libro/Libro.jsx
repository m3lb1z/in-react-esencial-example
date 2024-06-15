import "./Libro.css";
import PropTypes from "prop-types";

const Libro = ({ libro }) => {
  return (
    <>
      <div className="item">
        <h2>{libro.titulo}</h2>
        <span>Publicado en {libro.publicado}</span>
      </div>
    </>
  );
};

Libro.propTypes = {
  libro: PropTypes.object.isRequired,
};

export default Libro;
