import React, { useState } from 'react';
import Router from 'next/router';
import { Espacio, Form, Titulo, ErrorLogin } from '../Components/UI/ui';

export default function Home() {
  const [ valores, setValores ] = useState({
    email: '',
    password: ''
  });

  const [ error, setError ] = useState(false);

  const handleChange = e => {
    e.preventDefault();

    setValores({
      ...valores,
      [e.target.name] : e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if(valores.email == "calebmartinez0929@gmail.com" && valores.password == "Kleb0929") {
      setError(false);
      Router.push("/menu");
    } else {
      setError(true);
    }
    
  }

  return (
    <>
    <Espacio>
      <Titulo>Iniciar Sesión</Titulo>

      <Form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='email'>Correo</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Correo electrónico'
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
              name='password'
              type='password'
              placeholder='Contraseña'
              onChange={handleChange}
            />
        </div>


          {error && <ErrorLogin>Datos incorrectos</ErrorLogin>}

        <button type='submit'>Entrar</button>
      </Form>
    </Espacio>
    </>
  )
}
