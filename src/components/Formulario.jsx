import React, { useState } from 'react';

function Formulario({ actualizaMensaje }) {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmacion: ''
  });

  const cambiaDato = (campo) => (evento) => {
    setDatos({ ...datos, [campo]: evento.target.value });
  };

  const enviaFormulario = (evento) => {
    evento.preventDefault();
    let mensajes = [];
    if (!datos.nombre) mensajes.push("El nombre es obligatorio.");
    if (!datos.email) mensajes.push("El email es obligatorio.");
    if (!datos.contraseña || datos.contraseña !== datos.confirmacion) {
      mensajes.push("Las contraseñas no coinciden o están vacías.");
    }
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (datos.email && !expresionEmail.test(datos.email)) {
      mensajes.push("El formato del email no es válido.");
    }

    if (mensajes.length === 0) {
      mensajes.push("Registro exitoso.");
    }

    actualizaMensaje(mensajes);
  };

  return (
    <form onSubmit={enviaFormulario} className="formulario-registro">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={datos.nombre}
        onChange={cambiaDato('nombre')}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={datos.email}
        onChange={cambiaDato('email')}
      />
      <input
        type="password"
        name="contraseña"
        placeholder="Contraseña"
        value={datos.contraseña}
        onChange={cambiaDato('contraseña')}
      />
      <input
        type="password"
        name="confirmacion"
        placeholder="Confirmar Contraseña"
        value={datos.confirmacion}
        onChange={cambiaDato('confirmacion')}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Formulario;
