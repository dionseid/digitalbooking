import React, { useState, useEffect, useContext } from "react";
//import Calendar from "react-calendar";
//import 'react-calendar/dist/Calendar.css';
import Media from "react-media";
//import CalendarStyle from "../components/elementStyle/CalendarStyle";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "./calendario.scss";
import { Container, Row, Col } from "react-bootstrap";
import FechaRangoContextProvider from "../../context/FechaRangoContextProvider";

import { useParams } from "react-router-dom";
import axiosConnection from "../../../helpers/axiosConnection";

const Calendario = () => {
  const { rango, setRango } = useContext(FechaRangoContextProvider);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { id } = useParams();

  const [dataReservas, setDataReservas] = useState([]);
  setRango(dateRange);

  useEffect(() => {
    axiosConnection.get("/reserva/listarReservas").then((response) => {
      setDataReservas(response.data.data);
      console.log("response.data.data: ", response.data.data);
    });
    return
  }, []);

  const getFechasReservadas = () => {
    const reservas = dataReservas
      .filter((reserva) => reserva.producto?.id == id)
      .map((fecha) => ({
        start: new Date(fecha.fechaInicial),
        end: new Date(fecha.fechaFinal),
      }));
    return reservas;
  };

  console.log("getFechasReservadas: ", getFechasReservadas());

  /*   const fechasNo = [
    { start: new Date("Dec 11 2022"), end: new Date("Dec 12 2022") }
    ]
  
  console.log("fechasNo: ", fechasNo); */

  registerLocale("es", es);
  setDefaultLocale("es");

  return (
    <>
      <Container fluid className="datePickerContainer">
        <Row>
          <Col>
            <Media query="(max-width:460px)">
              {(matches) => {
                return matches ? (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    excludeDates={getFechasReservadas()?.map(
                      (date) => date.end
                    )}
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
                ) : (
                  <DatePicker
                    calendarClassName="bordeCalendario"
                    excludeDateIntervals={getFechasReservadas()}
                    excludeDates={getFechasReservadas()?.map(
                      (date) => date.end
                    )}
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
                );
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
