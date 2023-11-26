import React from 'react';

function Alerta({ mensajes }) {
  if (mensajes.length === 0) return null;

  const esExitoso = mensajes.some(mensaje => mensaje.toLowerCase().includes('éxito'));
  const tipoAlerta = esExitoso ? 'alert-success' : 'alert-danger';

  return (
    <div className={`alert ${tipoAlerta}`}>
      {mensajes.map((mensaje, indice) => (
        <div key={indice}>{mensaje}</div>
      ))}
    </div>
  );
}

export default Alerta;
