import { useState } from "react";

const MiFormulario = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "ejemplo@domain.com",
    password: "123456",
  });

  const procesarCambio = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const procesarSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
    console.log(formData);
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form autoComplete="off">
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={procesarCambio}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={procesarCambio}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={procesarCambio}
          />
        </div>
        <input type="submit" value="Registrar" onClick={procesarSubmit} />
      </form>
    </div>
  );
};

export default MiFormulario;
