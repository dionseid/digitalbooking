import React, {useState} from 'react';


const Context = React.createContext({})

export function FechaRangoContextProvider ({children}) {
  const [rango, setRango] = useState([null, null]);

  return <Context.Provider value={{rango, setRango}}>
    {children}
  </Context.Provider>
}

export default Context;