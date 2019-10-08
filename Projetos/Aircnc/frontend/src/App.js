import React from 'react';

import './app.css';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo da Aircnc" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input id="email" type="email" placeholder="Digite seu email" />
          <button type="submit">Acessar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
