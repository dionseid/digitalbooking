import React, { useState } from "react";
//import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';
import Media from "react-media";
//import CalendarStyle from "../components/elementStyle/CalendarStyle";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/calendario.css';
import { Container, Row, Col } from "react-bootstrap";



const Calendario = () => {
  const [value, onChange] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  
  registerLocale("es", es);
  setDefaultLocale("es"); 

  return (<>
    <Container fluid className="datePickerContainer">
        <Row>
          <Col>
          <Media query="(max-width:460px)">
        {matches => {
        return matches ? 
            <DatePicker
              excludeDateIntervals={[
                { start: new Date("Jun 8 2022"), end: new Date("Jun 19 2022") },
                ]}      
                selected={startDate}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                monthsShown={1}
                inline
            />
            :
            <DatePicker
            excludeDateIntervals={[
              { start: new Date("Jun 8 2022"), end: new Date("Jun 19 2022") },
              ]}      
              selected={startDate}
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              monthsShown={2}
              inline
          />
        }}
        </Media>
          </Col>
        </Row>
      </Container>
    {/* {<CalendarStyle>
      <Media query="(max-width:460px)">
        {matches => {
        return matches ? 
        <Calendar onChange={onChange} value={value} showDoubleView={false} className="calendarStyle" selectRange={true} tileDisabled={({ date, view }) =>
        (view === "month" && date.getDay() === 0) || date.getDay() === 6
      } excludeDateIntervals={[
          { start: new Date("Jun 8 2022"), end: new Date("Jun 19 2022") },
          ]}/>:
        <Calendar onChange={onChange} value={value} showDoubleView={true} className="calendarStyle" selectRange={true} tileDisabled={({ date, view }) =>
        (view === "month" && date.getDay() === 0) || date.getDay() === 6
      } excludeDateIntervals={[
          { start: new Date("Jun 8 2022"), end: new Date("Jun 19 2022") },
          ]}/>
        }}
      </Media> 

      
      
    </CalendarStyle>} */}

    </>
  );
};

export default Calendario;

