import React, { useState } from 'react';
import Alerta from './Alerta';
import Form from './Formulario'; 
import SocialButton from './SocialButton'; 
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'; 
function Registro() {
  const [mensaje, setMensaje] = useState([]);
  const handleSocialClick = (social) => {
    console.log(`Iniciando sesión con ${social}`);
    setMensaje([`Iniciando sesión con ${social}`]);
  };

  return (
    <div className="registro-container">
      <h1>Registro de Usuario</h1>
      <div className="social-container">
        <SocialButton Icon={FaFacebookF} onClick={() => handleSocialClick('Facebook')} />
        <SocialButton Icon={FaGithub} onClick={() => handleSocialClick('GitHub')} />
        <SocialButton Icon={FaLinkedinIn} onClick={() => handleSocialClick('LinkedIn')} />
      </div>
      <Form actualizaMensaje={setMensaje} />
      <Alerta mensajes={mensaje} />
    </div>
  );
}

export default Registro;
