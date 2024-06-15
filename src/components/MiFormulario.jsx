import { useState } from "react";

const MiFormulario = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "ejemplo@domain.com",
    password: "123456",
  });

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
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
          />
        </div>
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
};

export default MiFormulario;
