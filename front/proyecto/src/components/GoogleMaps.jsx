import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/googleMaps.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from 'react-leaflet';
import {Icon} from "leaflet"; 
import { useParams } from 'react-router-dom';
import { data } from 'jquery';

const GoogleMaps = () => {
  const [dataCiudades, setDataCiudades] = useState([]);
  const [dataLocation, setDataLocation] = useState({lat:-34.921708532606615, lng:-57.95914377161197});

  const {id} = useParams();
  //let location =[-34.921708532606615, -57.95914377161197];

  const location = () =>{
    if(dataCiudades == 1){
      setDataLocation({lat:-34.921708532606615, lng:-57.95914377161197})    
    }else if(dataCiudades == 2){
      setDataLocation({lat:-37.96178246482009, lng:-57.53994529430491})
    }else if(dataCiudades == 3){
      setDataLocation({lat:-34.57764810105079, lng:-68.33793575823363})
    }else if(dataCiudades == 4){
      setDataLocation({lat:-40.923535302245035, lng:-71.3140761033357})
    }

  }
  
  useEffect( () => {
      axios.get(`http://localhost:8080/ciudades/${id}`)   
      .then(response => {
        setDataCiudades(response.data.ciudades)
        location();  
        
      })
              
        /*
        if(dataCiudades.nombre == "La Plata"){
          location =[-34.921708532606615, -57.95914377161197]    
        }else if(dataCiudades.nombre == "Mar del Plata"){
          location =[-37.96178246482009, -57.53994529430491]
        }else if(dataCiudades.nombre == "San Rafael"){
          location=[-34.57764810105079, -68.33793575823363]
        }else if(dataCiudades.nombre == "San Carlos de Bariloche"){
          location=[-40.923535302245035, -71.3140761033357]
        } 
         */
      
     
        
  
  }, [])

  
  console.log(dataCiudades);
  console.log(dataLocation);

  
/* const location = {      
  'La Plata' : 
      position = [-34.921708532606615, -57.95914377161197],
  'Mar del Plata': 
      position = [-37.96178246482009, -57.53994529430491],
  'San Rafael': 
      position = [-37.96178246482009, -57.53994529430491],
  'San Carlos de Bariloche': 
      position = [-40.923535302245035, -71.3140761033357]
} */

//let location =[-34.921708532606615, -57.95914377161197];

/* if(dataCiudades.nombre == "La Plata"){
  location =[-34.921708532606615, -57.95914377161197]    
}else if(dataCiudades.nombre == "Mar del Plata"){
  location =[-37.96178246482009, -57.53994529430491]
}else if(dataCiudades.nombre == "San Rafael"){
  location=[-34.57764810105079, -68.33793575823363]
}else if(dataCiudades.nombre == "San Carlos de Bariloche"){
  location=[-40.923535302245035, -71.3140761033357]
} */


  
  return (
    <>
    
    <div id="map">
        <MapContainer center={[dataLocation.lat, dataLocation.lng]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[dataLocation.lat, dataLocation.lng]}></Marker>
        </MapContainer>    
    </div>
    </>
  )
}

export default GoogleMaps;

{/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>

</Marker>
</MapContainer> */}