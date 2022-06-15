import React, { useState } from "react";
import Calendar from "react-calendar";
import '../styles/calendario.css';
import 'react-calendar/dist/Calendar.css';
import Media from "react-media";
import CalendarStyle from "../components/elementStyle/CalendarStyle"


const Calendario = () => {
  const [value, onChange] = useState(new Date());


  return (    
    <CalendarStyle>
      <Media query="(max-width:460px)">
        {matches => {
        return matches ? 
        <Calendar onChange={onChange} value={value} showDoubleView={false} className="calendarStyle" selectRange={true}/>:
        <Calendar onChange={onChange} value={value} showDoubleView={true} className="calendarStyle" selectRange={true}/>
        }}
      </Media> 

      
      
    </CalendarStyle>
  );
};

export default Calendario;