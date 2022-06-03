import React, { useState } from "react";
import Calendar from "react-calendar";
import '../styles/calendario.css';


const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  );
};

export default Calendario;