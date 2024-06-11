import { useReducer } from "react";

const ContadorReducer = () => {
  const reducer = (contador, action) => {
    switch (action.type) {
      case "incrementar":
        return contador + 10;
      case "decrementar":
        return contador - 10;
      default:
        throw new Error();
    }
  };

  // const [contador, setContador] = useReducer((contador) => contador + 1, 0);
  const [contador, operacion] = useReducer(reducer, 0);

  return (
    <>
      <h1>Contador de clicks</h1>
      <p>conteo: {contador}</p>
      <button onClick={() => operacion({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => operacion({ type: "decrementar" })}>
        Decrementar
      </button>
    </>
  );
};

export default ContadorReducer;
