import { Link } from "react-router-dom";
import Contents from "./Contents";

const Home = () => {
  const productos = [
    {
      id: 1,
      nombre: "Smartwatch Apple Watch",
    },
    {
      id: 2,
      nombre: "Tableta Samsung Galaxy Tab",
    },
    {
      id: 3,
      nombre: "Consola de Videojuegos PlayStation 5",
    },
    {
      id: 4,
      nombre: "Audífono Wireless Sony WH-1000XM4",
    },
    {
      id: 5,
      nombre: "Laptop Dell XPS 13",
    },
    {
      id: 6,
      nombre: "Smartphone Huawei P30 Pro",
    },
    {
      id: 7,
      nombre: "Reproductor de Audio Sonos One",
    },
    {
      id: 8,
      nombre: "Tableta Android Lenovo Tab M10",
    },
    {
      id: 9,
      nombre: "Consola de Videojuegos Nintendo Switch",
    },
    {
      id: 10,
      nombre: "Cámara de Vigilancia Ring Stick Up Cam",
    },
  ];

  return (
    <>
      <h1>Inicio</h1>
      <Contents />

      <h2>Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <Link
            key={producto.id}
            to={`/producto/${producto.nombre}`}
            className="list-group-item list-group-item-action"
          >
            {producto.nombre}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
