import React, { useState, useContext } from 'react';
//import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import selectStyles from '../../elementStyle/selectStyles';
import HoraContextProvider from '../../context/HoraContextProvider';

// CSS Modules, react-datepicker-cssmodules.css
// importar 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SelectHora(requerido) {
    const [startTime, setStartTime] = useState(null);
    const {setIsHora} = useContext(HoraContextProvider);




    console.log("hora: ", startTime?.toTimeString().slice(0,9));
    //setIsHora(startTime.toTimeString().slice(0,9))

    setIsHora(startTime?.toTimeString().slice(0,9))
  
    


    return (
        <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className='inputHora'
      styles={selectStyles}
      locale="es"
      scrollableYearDropdown
      placeholderText="seleccionar hora de llegada"
      required={true}
      />
    )
}