import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        auth: false
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
