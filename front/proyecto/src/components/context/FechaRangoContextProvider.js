import React, {useState} from 'react';


const Context = React.createContext({})

export function FechaRangoContextProvider ({children}) {
  const [fechaInicio, setFechaInicio] = useState([null]);
  const [fechaFinal, setFechaFinal] = useState([null]);

  return <Context.Provider value={{fechaInicio, setFechaInicio, fechaFinal, setFechaFinal}}>
    {children}
  </Context.Provider>
}

export default Context;