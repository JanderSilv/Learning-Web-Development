import React from 'react';
import Header from './components/Header';
import Routes from './routes';

import "./styles.css";

const App = () => (
  <div className="App">
      <Header />
      <Routes />
  </div>
);

export default App;

// Componente é um conjunto de parte visual (HTML), a parte funcional (JS) e estilização (CSS).