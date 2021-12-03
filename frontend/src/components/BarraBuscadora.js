import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
//esta app imprime en pantalla todos los videos almacenados en la base de datos
//desde el front filtramos y buscamos por tag para que se rendericen en pantalla

function BarraBuscadora () {
    const [usuarios,setUsuarios]=useState([]);
    const [videos,setVideos]=useState([]);
    const [busqueda,setBusqueda]=useState("");

    
    const peticionGet = async ()=>{
        await axios.get("")
        .then(response=>{
            setUsuarios(response.data);
            setVideos(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const handlechange= (e)=>{
        setBusqueda(e.target.value);
        console.log("busqueda: "+ e.target.value);
    };

    const filtrar=(terminoBusqueda)=>{
        let resultadosBusqueda=usuarios.filter((element)=>{
            if(element.tags.toString().tolowerCase().includes(terminoBusqueda.tolowerCase())){
                return element;
            }
            

        });
        setUsuarios(resultadosBusqueda);


    };

    useEffect(()=>{
        peticiones();

    },[])
    return(
        <>
        <div className="container_input">
        <input
        className="input_buscar"
        value={busqueda}
        placeholder="Busqueda por tags"
        onChange={handlechange}
        />
        <button className="btn-enviar" >Buscar</button>
        </div>
        <div className="videos">
        {usuarios.map((usuario)=>(
            <div className="box-videos" key={usuario.id}>
                <h3>{usuario.titulo}</h3>
                <video src={usuario.src}></video>
                <p>{usuario.tag}</p>
            </div>
        ))};
        </div>
        </>

    );
}

export default BarraBuscadora;