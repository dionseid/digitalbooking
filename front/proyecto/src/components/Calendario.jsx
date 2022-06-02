import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendario.css'

const Calendario = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='calendario'>
      <Calendar 
      onChange={onChange} 
      value={value}
      minDate= {new Date()}
      selectRange={true}
      showDoubleView={true}
      />
    </div>
  );
}

export default Calendario;