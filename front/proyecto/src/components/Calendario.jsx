import React, { useState,useEffect, useContext, useMemo } from "react";
//import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';
import Media from "react-media";
//import CalendarStyle from "../components/elementStyle/CalendarStyle";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/calendario.css';
import { Container, Row, Col } from "react-bootstrap";
import FechaRangoContextProvider from "./context/FechaRangoContextProvider";
import axios from "axios";
import { useParams } from "react-router-dom";



const Calendario = () => {
  const {rango, setRango} = useContext(FechaRangoContextProvider);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const {id} = useParams();

  const [dataReservas, setDataReservas] = useState([]);
  setRango(dateRange);
  


  useEffect( () => {
      axios.get("http://localhost:8080/reserva")
      .then(response => {
        setDataReservas(response.data)})
        
  
  }, [])
  
  const getFechasReservadas = () =>{
    const reservas = dataReservas?.data?.filter((reserva) => reserva.producto?.id == id).map((fecha)=>(
                
      {start: new Date(fecha.fechaInicial), end: new Date(fecha.fechaFinal)}
  
    ));
    return reservas    
  }


  //console.log(getFechasReservadas()?.map((date)=>(date.start)));
  
/*   const fechasNo = [
    { start: new Date("Dec 11 2022"), end: new Date("Dec 12 2022") }
    ]
  
  console.log("fechasNo: ", fechasNo); */

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
              excludeDateIntervals={getFechasReservadas()}
              excludeDates={getFechasReservadas()?.map((date)=>(date.start))}
                selected={startDate}    
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                onChange={(update) => {
                  setDateRange(update);
                }}
                monthsShown={1}
                inline
            />
            :
            <DatePicker
            excludeDateIntervals={getFechasReservadas()}
            excludeDates={getFechasReservadas()?.map((date)=>(date.start))}      
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
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

