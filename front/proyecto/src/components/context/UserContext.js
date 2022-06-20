import React, { createContext, useState } from "react";
import { redirect } from "react-router";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        nombre: 'Franco',
        apellido: 'Veron',
        mail: '',
        auth: false,
        redirect:false
});

    const loginLogoutEvent = (userCredentials) => {
        setUser(userCredentials);
    };

    return (
        <UserContext.Provider value={{ user, loginLogoutEvent }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContext;