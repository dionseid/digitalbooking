import { React, useEffect, useMemo, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Button } from "react-bootstrap";

export default function CalendarioBanner({startDate, endDate, setDateRange}) {
    const [isStartOpen, setIsStartOpen] = useState(false);

    const onClickAplicar = () => {
        setIsStartOpen(false);
      };
    
      const onCalendarOpen = () => {
        setIsStartOpen(true);
      };
    
      registerLocale("es", es);
      setDefaultLocale("es");


  return (
    <div>
        <DatePicker
            placeholderText=" Check in - Check out"
            isInputWithCalendar={true}
            className="inputBanner"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            locale="es"
            monthsShown={2}
            excludeDateIntervals={[
              { start: new Date("Jun 8 2022"), end: new Date("Jun 19 2022") },
            ]}
            calendarStartDay={1}
            timeCaption="time"
            dateFormat="MMMM d, yyyy"
            changeMonth
            todayButton={
              <Button className="botonCalendario" onClick={onClickAplicar}>
                Aplicar
              </Button>
            }
            selected={startDate}
            shouldCloseOnSelect={false}
            onCalendarOpen={onCalendarOpen}
            onFocus={onCalendarOpen}
            open={isStartOpen}
        />
    </div>
  )
}
