import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import Formulario from '../Formulario/Formulario.jsx';

export default function Registro({ onAlert }) {
  
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton Button={"fa-brands fa-facebook"}/>
      <SocialButton Button={"fa-brands fa-github"}/>
      <SocialButton Button={"fa-brands fa-linkedin-in"}/>
      <p>O usa tu email para registrarte.</p>
      <Formulario addAlert={onAlert} />
    </>
  );
}
