import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      nombre: "Smartphone",
      precio: 599.99,
      descripcion:
        "El nuevo smartphone X5 es un dispositivo móvil de alta gama con una pantalla de 6.1 pulgadas y una cámara de 12 megapíxeles.",
      categoria: "Electrónica",
    },
    {
      id: 2,
      nombre: "Laptop",
      precio: 999,
      descripcion:
        "La laptop X7 es un portátil de alta gama con procesador Intel Core i7, 16 GB de RAM y una capacidad de almacenamiento de 512 GB.",
      categoria: "Informática",
    },
    {
      id: 3,
      nombre: "SmartTV",
      precio: 349.5,
      descripcion:
        "La SmartTV X3 es un televisor inteligente con pantalla de 49 pulgadas, soporte para streaming y acceso a aplicaciones de terceros.",
      categoria: "Electrónica",
    },
    {
      id: 4,
      nombre: "Altavoces",
      precio: 89.95,
      descripcion:
        "Los altavoces X1 son un sistema de sonido inalámbrico con un diseño compacto y una calidad de sonido de alta fidelidad.",
      categoria: "Electrónica",
    },
    {
      id: 5,
      nombre: "Tablet",
      precio: 899,
      descripcion:
        "El tablet X9 es un dispositivo móvil de alta gama con una pantalla de 10.1 pulgadas, procesador Intel Core i5 y 128 GB de almacenamiento.",
      categoria: "Electrónica",
    },
    {
      id: 6,
      nombre: "Audífonos",
      precio: 79.99,
      descripcion:
        "Los audífonos X2 son un par de auriculares inalámbricos con micrófono y control de volumen.",
      categoria: "Electrónica",
    },
    {
      id: 7,
      nombre: "Impresora 3D",
      precio: 299.99,
      descripcion:
        "La impresora 3D X1 es un dispositivo de impresión en tres dimensiones con una resolución de 0.1 mm y un tamaño de impresión de 250x250x250 mm.",
      categoria: "Tecnología",
    },
    {
      id: 8,
      nombre: "Cámara de fotos",
      precio: 499.99,
      descripcion:
        "La cámara de fotos X4 es un dispositivo de captura de imágenes con una cámara de 24 megapíxeles, estabilizador de imagen y soporte para tarjetas SD.",
      categoria: "Fotografía",
    },
    {
      id: 9,
      nombre: "Gafas de realidad virtual",
      precio: 199.99,
      descripcion:
        "Las gafas de realidad virtual X5 son un dispositivo de realidad virtual con un campo de visión de 120 grados y un tiempo de respuesta de 10 ms.",
      categoria: "Tecnología",
    },
    {
      id: 10,
      nombre: "Robot de limpieza",
      precio: 199.99,
      descripcion:
        "El robot de limpieza X6 es un dispositivo autónomo que limpia suelos y alfombras con un sistema de navegación inercial y un sistema de limpieza de alta eficiencia.",
      categoria: "Electrónica",
    },
  ]);

  // useEffect(() => {
  //   fetch("./productos.json")
  //     .then((response) => response.json())
  //     .then((datos) => setData(datos))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
