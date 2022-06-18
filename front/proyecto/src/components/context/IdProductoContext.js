import React, {useState} from 'react';


const Context = React.createContext({})

export function IdProductoContextProvider ({children}) {
  const [idProducto, setIdProducto] = useState([]);

  return <Context.Provider value={{idProducto, setIdProducto}}>
    {children}
  </Context.Provider>
}

export default Context;