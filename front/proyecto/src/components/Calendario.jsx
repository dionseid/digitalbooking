import React, { useState } from "react";
import Calendar from "react-calendar";
import '../styles/calendario.css';
import 'react-calendar/dist/Calendar.css';


const Calendario = () => {
  const [value, onChange] = useState(new Date());


  return (
    <div>
      <Calendar onChange={onChange} value={value} showDoubleView={true}/>
    </div>
  );
};

export default Calendario;