import React from 'react';
import Routes from './routes';

import logo from './assets/logo.svg'
import './app.css';

function App() {

    return (

        <div className="container">
            
            <img src={logo} alt="Logo da Aircnc" />
                
                <div className="content">
                    <Routes />
                
                </div>
        </div>
    );
}

export default App;
