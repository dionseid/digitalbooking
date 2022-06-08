import axios from 'axios';
import { React, useEffect, useMemo, useState } from 'react';
import Input from '../components/Input';
import CardRecomendacion from './CardRecomendaciones';
import "../styles/banner.css";
import SelectCiudades from './SelectCiudades';

const Banner = ({handleOnClick}) => { 
  return (
    <div className='banner'>
      <h1 className='tituloBanner'>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className='buscador'>
        <div className='inputBanner'>
          <SelectCiudades handleOnClick={handleOnClick}/>
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
          <button className='botonBanner' onClick={handleOnClick}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;