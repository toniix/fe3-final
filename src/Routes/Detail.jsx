import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { detail } from '../styles/components.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams();

  const [data, setData] = useState({});
  // console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
  }, []);

  return (
    <div className={detail}> 
      <h1>Detail Dentist {params.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p> Nombre: {data.name}</p>
      <p> Email: {data.email}</p>
      <p> Teléfono: {data.phone}</p>
      <p> Sitio Web: {data.website}</p>

    </div>
  )
}

export default Detail