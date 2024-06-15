import { useState } from "react";

const MiFormulario = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "ejemplo@domain.com",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const procesarCambio = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const procesarSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
    console.log(formData);

    const newFormErrors = {};

    if (formData.username.trim() === "") {
      newFormErrors.username = "El nombre de usuario es obligatorio";
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "El email es obligatorio";
    }

    if (formData.password.trim() === "") {
      newFormErrors.password = "La contraseña es obligatoria";
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    }

    console.log("Formulario errores");
    console.log(formErrors);
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
          {formErrors.username && <p>{formErrors.username}</p>}
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
          {formErrors.email && <p>{formErrors.email}</p>}
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
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>
        <input type="submit" value="Registrar" onClick={procesarSubmit} />
      </form>
    </div>
  );
};

export default MiFormulario;
