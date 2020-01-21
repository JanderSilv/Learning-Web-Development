import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function DevForm({ onSubmit }) {

    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
           (position) => {
              // console.log(position);
              
              const { latitude, longitude } = position.coords;
  
              // latitude = latitude.toString().replace('.', ',');
              // longitude = longitude.toString().replace('.', ',');
  
              // parseFloat(latitude); parseFloat(longitude);
              
              // console.log(latitude + '' + longitude);
  
              setLatitude(latitude);
              setLongitude(longitude);         
  
           },
           (error) => {
              console.log(error);
           },
           {
              timeout: 30000
           }
        );
     }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithub_username('');
        setTechs('');
    }

    return (

        <form onSubmit={handleSubmit}>

            <div className="input-block">

                <label htmlFor="">Usuário do Github</label>
                <input required 
                    name="github_username" 
                    id="github_username"  
                    value={github_username}
                    onChange={e => setGithub_username(e.target.value)}
                />
            
            </div>
                
            <div className="input-block">

                <label htmlFor="">Tecnologias</label>
                <input required
                    name="techs" 
                    id="techs" 
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />

            </div>  

            <div className="input-group">

                <div className="input-block">

                    <label htmlFor="latitude">Latitude</label>
                    <input type="number" required 
                        name="latitude" 
                        id="latitude" 
                        value={latitude}  
                        onChange={e => setLatitude(e.target.value)}
                    />

                </div>

                <div className="input-block">

                    <label htmlFor="longitude">Longitude</label>
                    <input type="number" required
                    name="longitude" 
                    id="longitude" 
                    value={longitude}
                    onChange={e => setLongitude(e.target.value)}
                    />

                </div>

            </div>

            <button type="submit">Salvar</button>

        </form>
    );
}
