import styled, {css} from 'styled-components';      


const CalendarStyle = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    
    
    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      border-radius: 20px;
      background-color: #F0572D;
      color: #FFFF;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    border: 0;
    border-radius: 50%;
    color: #F0572D

    &:hover {
    }

    &:active {
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
}  


    .react-calendar__tile {
      max-width: initial !important;
    } 

    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #BEBEBE;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
      background-color: #F0572D
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;

export default CalendarStyle;