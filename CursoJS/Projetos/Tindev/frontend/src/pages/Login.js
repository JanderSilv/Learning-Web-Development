import React, {useState} from 'react';

import logo from '../assets/logo.svg';
import api from '../services/api';
import './Login.css';

export default function Login({ history }) {
    const [username, setUsername] = useState(''); // Criação de um estado

async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão do form que redireciona para outra página, bloqueando esse redirecionamento 
    
    const response = await api.post('/devs', {
        username,
    });

    const {_id} = response.data;

    history.push(`/dev/${_id}`);
}


    return ( // retorna um componente HTML
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input placeholder="Digite seu usuário do GitHub" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
        
    );
}

// O estado de um componente é toda e qualquer informação que este componente manipular
