import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Login({ history }) {

    const [email, setEmail] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/sessions', { email }).then(res => {
            // console.log(res.data);

            const { _id } = res.data;
            localStorage.setItem('user', _id);

            history.push('/dashboard');
        }).catch(error => {
            console.log(error);
        });


    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">E-MAIL *</label>
                <input id="email"
                    type="email" 
                    placeholder="Digite seu email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} 
                />
                <button className="btn" type="submit">Acessar</button>

            </form>
        </>
    );
}
