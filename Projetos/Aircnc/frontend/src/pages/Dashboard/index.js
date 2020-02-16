import React, { useEffect, Fragment, useState } from 'react'
import api from '../../services/api';

import './styles.css'

export default function Dashboard() {

    const [spots, setSpots] = useState([]);
    
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            api.get('/dashboard', {
                headers : { user_id }
            }).then(res => {
                console.log(res.data);
                setSpots(res.data);
            }).catch(error => {
                console.log('Spots => ' + error);
                
            });
        }

        loadSpots();
    }, []);

    return (
        <Fragment>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
