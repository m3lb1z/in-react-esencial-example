import { useState } from "react";

const ContadorFunciones = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 5);
  };

  const decrementar = () => {
    setContador(contador - 5);
  };

  return (
    <>
      <h1>Contador de clicks</h1>
      <p>conteo: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
};

export default ContadorFunciones;
