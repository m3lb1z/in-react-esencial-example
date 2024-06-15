const MiFormulario = () => {
  const activarPorEvento = (e) => {
    e.stopPropagation();
    console.log(`label activado: ${e.type}`);
  };

  const inputActivado = (event) => {
    event.stopPropagation();
    console.log(`input activado: ${event.type}`);
  };

  const formularioActivado = (event) => {
    event.stopPropagation();
    console.log(`formulario activado: ${event.type}`);
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form autoComplete="off" onClick={formularioActivado}>
        <label htmlFor="username" onMouseOver={activarPorEvento}>
          Nombre de usuario:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onClick={inputActivado}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={activarPorEvento}
        />
        <br />
        <label htmlFor="password" onClick={activarPorEvento}>
          Contraseña:
        </label>
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
};

export default MiFormulario;
