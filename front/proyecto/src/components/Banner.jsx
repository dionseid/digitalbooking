import { React, useState } from 'react';
import Input from '../components/Input';
import "../styles/banner.css";
import SelectCiudades from './SelectCiudades';

const Banner = () => {
  return (
    <div className='banner'>
      <h1 className='tituloBanner'>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className='buscador'>
        <div className='inputBanner'>
          <SelectCiudades/>
        </div>
        <div className='inputBanner'>
          <Input
            attribute={{
              id: "location",
              name: "location",
              type: "text",
              placeholder: " Check in - Check out"
            }} className='inputBanner'
            isInputWithCalendar={true} />
        </div>
        <div>
          <button className='botonBanner'>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;