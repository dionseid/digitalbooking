import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import selectStyles from './elementStyle/selectStyles';

// CSS Modules, react-datepicker-cssmodules.css
// importar 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SelectHora() {
    const [startDate, setStartDate] = useState(null);


    return (
        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className='inputHora'
      styles={selectStyles}
      locale="es_AR"
      scrollableYearDropdown
      placeholderText="seleccionar hora de llegada"
      />
    )
}