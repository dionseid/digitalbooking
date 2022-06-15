import axios from 'axios';
import { React, useEffect, useMemo, useState } from 'react';
import Input from '../components/Input';
import CardRecomendacion from './CardRecomendaciones';
import SelectCiudades from './SelectCiudades';
import { Button } from 'react-bootstrap';
import "../styles/banner.css";

const Banner = ({onChange, onClick}) => { 
  return (
    <div className='banner'>
      <h1 className='tituloBanner'>Busca ofertas en hoteles, casas y mucho más</h1>
      <div className='buscador'>
          <SelectCiudades onChange={onChange}/>
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
          <Button className='botonBanner' onClick={onClick}>Buscar</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;