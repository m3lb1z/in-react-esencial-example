import "./App.css";
import ContadorReducer from "./components/ContadorReducer";
import ContadorFunciones from "./components/ContadorFunciones";
import { MiBoton } from "./components/MiBoton";

function App() {
  return (
    <>
      <MiBoton texto="Mi Boton Creado" />
      <ContadorReducer />
      <ContadorFunciones />
    </>
  );
}

export default App;
