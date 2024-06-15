import Libro from "../Libro/Libro";

const Catalogo = () => {
  const libros = [
    {
      id: 1,
      titulo: "El Señor de los Anillos",
      publicado: 1954,
    },
    {
      id: 2,
      titulo: "1984",
      publicado: 1949,
    },
    {
      id: 3,
      titulo: "La Sombra del Viento",
      publicado: 2004,
    },
    {
      id: 4,
      titulo: "El Aleph",
      publicado: 1949,
    },
    {
      id: 5,
      titulo: "La Metamorfosis",
      publicado: 1915,
    },
    {
      id: 6,
      titulo: "La Casa de los Espíritus",
      publicado: 2001,
    },
    {
      id: 7,
      titulo: "El Código Da Vinci",
      publicado: 2003,
    },
    {
      id: 8,
      titulo: "El Nombre del Viento",
      publicado: 2004,
    },
    {
      id: 9,
      titulo: "La Sirena del Mississippi",
      publicado: 1986,
    },
    {
      id: 10,
      titulo: "El Lenguaje de los Animales",
      publicado: 1994,
    },
  ];

  const estilos = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "red",
  };

  return (
    <>
      <div className="libros" style={estilos}>
        {libros.map((libro) => (
          <Libro key={libro.id} libro={libro} />
        ))}
      </div>
    </>
  );
};

export default Catalogo;
