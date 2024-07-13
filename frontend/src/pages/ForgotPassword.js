import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/forgot-password.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // Salva os dados do usuário no localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Limpa os campos após o cadastro
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Redireciona para a página de login após a submissão
    navigate('/login');
  };

  return (
    <div className="forgot-password-page">
      <header className="forgot-password-header">
        <img 
          src={require('../assets/images/logo.png')} 
          alt="Logo" 
          className="forgot-password-logo" 
          onClick={() => navigate('/')} 
        />
        <Navbar showServices={false} />
      </header>
      <main className="forgot-password-main">
        <div className="forgot-password-box">
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="forgot-password-input" 
              required
            />
            <input 
              type="password" 
              placeholder="Senha" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="forgot-password-input" 
              required
            />
            <input 
              type="password" 
              placeholder="Confirme a Senha" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="forgot-password-input" 
              required
            />
            <button type="submit" className="forgot-password-button">Confirmar Cadastro</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
