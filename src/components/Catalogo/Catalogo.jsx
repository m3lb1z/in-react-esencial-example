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
    {
      id: 11,
      titulo: "El Principito",
      publicado: 1943,
    },
    {
      id: 12,
      titulo: "La Bella Durmiente",
      publicado: 1959,
    },
    {
      id: 13,
      titulo: "El Hombre que Se Quedó Solo",
      publicado: 1965,
    },
    {
      id: 14,
      titulo: "La Ciudad y los Perros",
      publicado: 1962,
    },
    {
      id: 15,
      titulo: "El Jardín de los Cerezos",
      publicado: 1953,
    },
    {
      id: 16,
      titulo: "La Sombra del Viento",
      publicado: 2004,
    },
    {
      id: 17,
      titulo: "El Aleph",
      publicado: 1949,
    },
    {
      id: 18,
      titulo: "La Metamorfosis",
      publicado: 1915,
    },
    {
      id: 19,
      titulo: "La Casa de los Espíritus",
      publicado: 2001,
    },
    {
      id: 20,
      titulo: "El Código Da Vinci",
      publicado: 2003,
    },
  ];
  const estilos = {
    display: "flex",
    flexWrap: "wrap",
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
