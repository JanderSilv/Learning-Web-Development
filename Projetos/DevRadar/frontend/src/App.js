import React, { useState, useEffect } from 'react';
import api from './services/api';

import DevItem from './Components/DevItem';
import DevForm from './Components/DevForm';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


export default function App() {

   const [devs, setDevs] = useState([]);

   useEffect(() => {
      function loadDevs() {
         api.get('/devs').then(res => {
            setDevs(res.data);
         }).catch(error => {
            console.log(error);
         });
      }
      loadDevs();
   }, []);

   function handleAddDev(data) {
      api.post('./devs', data).then(res => {
         // console.log(res.data);
         setDevs([...devs, res.data]);
      }).catch(error => {
         console.log(error);
      });
   }


   return (

      <div className="App">

         <aside>

               <strong>Cadastrar</strong>
               <DevForm onSubmit={handleAddDev} />               

         </aside>

         <main>

            <ul>

               {devs.map(dev => (

                  <DevItem key={dev._id} dev={dev} />

               ))}

            </ul>

         </main>

      </div>
   );
}
