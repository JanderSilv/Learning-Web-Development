import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }) {

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        }, [thumbnail]        
    );

    function handleSubmit(event) {
        event.preventDefault();

        const user_id = localStorage.getItem('user');
        const data = new FormData();
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        api.post('/spot', data, {
            headers: { user_id }
        }).then(res => {
            // console.log(res.data);
            history.push('/dashboard');
        }).catch(error => {
            console.log('spot => ' + error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>

            <label id="thumbnail" className={thumbnail? 'has-thumbnail' : ''} 
                style={{ backgroundImage: `url(${preview})` }}>
                <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input type="text" 
                id="company" 
                placeholder="Sua empresa"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />

            <label htmlFor="techs">TECNLOGIAS * <span>(separadas por vírgula)</span></label>
            <input type="text" 
                id="techs" 
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={e => setTechs(e.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input type="text" 
                id="price" 
                placeholder="Valor cobrado por dia?"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />

            <button className="btn">Cadastrar</button>
        </form>
    );
}

