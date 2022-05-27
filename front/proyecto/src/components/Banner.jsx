import React from 'react';
import Input from '../components/Input';
import "../styles/banner.css";


const Banner = () => {
 
  return (
    <>
            <div className='banner'>
                <h1>Busca ofertas en hoteles, casas y mucho más</h1>
                <div className='buscador'>
                  <div className='inputBanner'>
                  <Input attribute={{
                    id:"location",
                    name:"location",
                    type:"text",
                    placeholder:" ¿A dónde vamos?"
                    }} 
                  />
                  </div>
                  <div className='inputBanner'>
                  <Input attribute={{
                    id:"location",
                    name:"location",
                    type:"text",
                    placeholder:" Check in - Check out"
                    }} className='inputBanner'
                  />
                  </div>
                  <div>
                    <button className='botonBanner'>Buscar</button>
                  </div>
                </div>
            </div>
    </>
  )
 
}

export default Banner;