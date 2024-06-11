export const ComponenteB = ({ textBtn, onClick }) => {
  const miValor = "Datos desde componente hijo";

  const manejarClick = () => {
    alert("Botón presionado");
  };

  return (
    <button
      onClick={() => {
        onClick(miValor);
      }}
    >
      {textBtn}
    </button>
  );
};
