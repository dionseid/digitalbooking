import { React } from "react";
import "../styles/input.scss";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "../styles/banner.scss";

const Input = ({ attribute, handleChange, param, isInputWithCalendar }) => {
  // const [calendarMonth, setCalendarMonth] = useState("");

  // useEffect(() => {
  //     if (document.querySelector('th.month')) {
  //         console.log(calendarMonth);
  //         document.querySelector('th.month').dangerouslySetInnerHTML = calendarMonth;
  //         document.querySelector('h1').innerHTML = "Testing";
  //     }
  // }, [calendarMonth]); // El objetivo de este hook es formatear el calendario para que muestre el mes sin el año

  const handleApply = (event, picker) => {
    const formatter = (date) =>
      date.format("DD") +
      " de " +
      new Date(picker.startDate.format("MM")).toLocaleDateString("es-ES", {
        month: "short",
      }) +
      ".";
    return picker.element.val(
      " " + formatter(picker.startDate) + " - " + formatter(picker.endDate)
    );
  };

  const handleCancel = (event, picker) => picker.element.val("");

  // const formatMonth = () => setCalendarMonth(document.querySelector('th.month').innerText.split(" ")[0]);

  return (
    <div className="input-contenedor">
      {isInputWithCalendar && (
        <DateRangePicker
          initialSettings={{
            autoUpdateInput: false,
            locale: {
              format: " ",
              applyLabel: "Aplicar",
              daysOfWeek: ["S", "M", "T", "W", "T", "F", "S"],
              monthNames: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ],
            },
            cancelButtonClasses: "hide",
          }}
          onApply={handleApply}
          // onShow={formatMonth}
          onCancel={handleCancel}
        >
          <input {...attribute} className="regular-style calendar-input" />
        </DateRangePicker>
      )}
      {!isInputWithCalendar && (
        <input {...attribute} className="regular-style" />
      )}
    </div>
  );
};

export default Input;
