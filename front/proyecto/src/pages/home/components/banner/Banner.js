import React from 'react';
import Input from '../../../login/components/input/Input';
import "./banner.css";


const Banner = () => {
 
  return (
    <>
            <div className='banner'>
                <h1>Busca ofertas en hoteles, casas y mucho más</h1>
                <div className='buscador'>
                  <Input attribute={{
                    id:"location",
                    name:"location",
                    type:"text",
                    placeholder:" ¿A dónde vamos?"
                    }} className='inputBanner'
                  />
                  <Input attribute={{
                    id:"location",
                    name:"location",
                    type:"text",
                    placeholder:" Check in - Check out"
                    }} className='inputBanner'
                  />
                    <button className='botonBanner'>Buscar</button>
                </div>
            </div>
    </>
  )
 
}

export default Banner;