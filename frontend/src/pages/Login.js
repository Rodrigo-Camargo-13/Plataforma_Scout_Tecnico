// C:\MVP_Scout\frontend\src\pages\Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Recupera os dados do usuário do localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verifica se os dados inseridos correspondem aos dados armazenados
    if (email === storedEmail && password === storedPassword) {
      // Redireciona para a página "Services" se os dados estiverem corretos
      navigate('/services');
    } else {
      // Exibe mensagem de erro se os dados estiverem divergentes
      alert('Usuário não cadastrado.');
    }

    // Limpa os campos de email e senha após o login
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={require('../assets/images/fundo_login.png')} alt="Fundo Login" className="background-image" />
      </div>
      <div className="login-right">
        <img 
          src={require('../assets/images/logo.png')} 
          alt="Logo" 
          className="logo" 
          onClick={() => navigate('/')} 
        />
        <form onSubmit={handleLogin} className="login-form">
          <h1 className="login-title">Login</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="login-input" 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="login-input" 
            required
          />
          <a href="/forgot-password" className="forgot-password">Esqueceu a senha? Clique aqui</a>
          <button type="submit" className="login-button">Login</button>
        </form>
        <footer className="login-footer">
          <a href="http://www.dataaccent.com.br" target="_blank" rel="noopener noreferrer">www.dataaccent.com.br</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
