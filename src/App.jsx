import { useState } from "react";
import "./App.css";
import { ComponenteA } from "./assets/components/ComponenteA";
import { ComponenteB } from "./assets/components/ComponenteB";
import { useCallback } from "react";

function App() {
  const miEmoji = "😁";
  const miTextBtn = "Buscar Destino";

  const [mensaje, setMensaje] = useState("Viajes de Aventura");

  const manejarClick = () => {
    setMensaje("Listo para viajar");
  };

  const callback = useCallback(
    (datos) => {
      setMensaje(datos);
    },
    [mensaje]
  );

  return (
    <>
      <h1>React App</h1>
      <ComponenteA emoji={miEmoji} titulo={mensaje} />
      <ComponenteB textBtn={miTextBtn} onClick={manejarClick} />
      <ComponenteB textBtn="Callback" onClick={callback} />
    </>
  );
}

export default App;
