import React, {createContext, useState} from 'react';


const HoraContext = createContext();

export function HoraContextProvider ({children}) {
  const [isHora, setIsHora] = useState([null]);

  return <HoraContext.Provider value={{isHora, setIsHora}}>
    {children}
  </HoraContext.Provider>
}

export default HoraContext;