import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
   nombre: '',
   email: '',
   password: '',
   confirmarPassword: '',
 });

  function validacionInputs(e) {
    e.preventDefault();

   
    if (inputs.nombre || inputs.email || inputs.password || inputs.confirmarPassword) {
      addAlert({
        estado: true,
        texto: '¡Es necesario completar todos los campos solicitados!',
        tipo: 'alert-danger',
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
        addAlert({
          estado: true,
          texto: '¡El nombre debe contener, minimo 4 caracteres y no se permiten caracteres especiales!',
          tipo: 'alert-danger', 
        });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        estado: true,
        texto: '¡Formato de email incorrecto!',
        tipo: 'alert-danger',
        });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        estado: true,
        texto: '¡La contraseña debe tener como minimo 8 caracteres, mayúscula, minúscula y un número!',
        tipo: 'alert-danger',
        });
    } else if (inputs.password != inputs.confirmarPassword) {
      addAlert({
        estado: true,
        texto: '¡Las contraseñas no son iguales!',
        tipo: 'alert-danger',
        });
    } else {
      addAlert({
        estado: true,
        texto: '¡Registro creado exitosamente!',
        tipo: 'alert-success',
        });
    }
  }

  function inputsHandler(e) {
    if (e.target.id === 'nombre') {
      setInputs({ inputs, nombre: e.target.value });
    }
    if (e.target.id === 'email') {
      setInputs({ ...inputs, email: e.target.value });
    }
    if (e.target.id === 'password') {
      setInputs({ ...inputs, password: e.target.value });
    }
    if (e.target.id === 'confirmarPassword') {
      setInputs({ ...inputs, confirmarPassword: e.target.value });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="nombre"
            name="Nombre"
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="email"
            name="Email"
            type="email"
            placeholder="tuemail@ejemplo.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="confirmarPassword"
            name="confirmarPassword"
            type="password"
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>

        <Button variant="success w-100" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}




