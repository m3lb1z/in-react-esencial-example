import PropTypes from "prop-types";

const ProductoItem = ({ producto }) => {
  if (!producto) return <div>No se proporciono producto</div>;

  return (
    <div className="card">
      <div className="item">
        <h2>{producto.nombre}</h2>
        <p>
          <strong> Precio: </strong>S/ {producto.precio}
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

ProductoItem.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductoItem;
