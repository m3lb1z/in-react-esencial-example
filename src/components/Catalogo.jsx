const Catalogo = () => {
  let productos = [
    {
      id: 1,
      nombre: "Camisa blanca",
      precio: 15.99,
    },
    {
      id: 2,
      nombre: "Pantalones azules",
      precio: 29.99,
    },
    {
      id: 3,
      nombre: "Sudadera gris",
      precio: 24.99,
    },
    {
      id: 4,
      nombre: "Faldilla roja",
      precio: 12.99,
    },
    {
      id: 5,
      nombre: "Camiseta negra",
      precio: 8.99,
    },
    {
      id: 6,
      nombre: "Pantalones verdes",
      precio: 39.99,
    },
    {
      id: 7,
      nombre: "Sudadera azul",
      precio: 34.99,
    },
    {
      id: 8,
      nombre: "Faldón blanco",
      precio: 19.99,
    },
    {
      id: 9,
      nombre: "Camisa verde",
      precio: 14.99,
    },
    {
      id: 10,
      nombre: "Pantalones negros",
      precio: 49.99,
    },
  ];
  // productos = [];

  return (
    <>
      <h2>Catalogo de Productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos disponibles en el catalogo.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - S/ {producto.precio}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Catalogo;
