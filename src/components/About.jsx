import { Button } from "bootstrap";
import Contents from "./Contents";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navegar = useNavigate();

  const manejarNavegacion = () => {
    navegar("/");
  };

  return (
    <>
      <h1>About</h1>
      <Contents />
      <Contents />

      <button onClick={manejarNavegacion}>Retornar al inicio</button>
    </>
  );
};

export default About;
