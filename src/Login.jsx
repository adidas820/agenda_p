import React, { useState } from 'react';
import './Login.css'; 

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usr= 'adi';
  const pwd = '123';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para validar las credenciales
    if (username === usr && password === pwd) {
      handleLogin(username);
    } else {
      alert('Credenciales inválidas. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;