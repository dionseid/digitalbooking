import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.scss";
import Sidebar from "./components/component/Sidebar/Sidebar";
import Productos from "./pages/Productos/Productos";
import Reserva from "./pages/Reserva/Reserva";
import { FechaRangoContextProvider } from "./components/context/FechaRangoContextProvider";
import ReservaExitosa from "./pages/ReservaExitosa/ReservaExitosa";
import { UserProvider } from "./components/context/UserContext";
import { HoraContextProvider } from "./components/context/HoraContextProvider";
import Administracion from "./pages/Administracion/Administracion";
import CreacionExitosa from "./pages/CreacionDeProductoExitosa/CreacionDeProductoExitosa";
import MisReservas from "./pages/MisReservas/MisReservas";
import MisProductos from "./pages/MisProductos/MisProductos";

function App() {
  //// const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const user = useContext(UserProvider);

  return (
    <div className="App">
      {console.log(user?.user)}
      <BrowserRouter>
        <UserProvider>
          <Sidebar pageWrapId={"page-wrap"} authenticated={user?.user.auth} />
          <FechaRangoContextProvider>
            <HoraContextProvider>
              <Routes>
                <Route
                  path="/"
                  element={<Home authenticated={user?.user.auth} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/productos/:id" element={<Productos />} />
                <Route path="/producto/:id/reserva" element={<Reserva />} />
                <Route path="/reservaExitosa" element={<ReservaExitosa />} />
                <Route path="/administracion" element={<Administracion />} />
                <Route path="//misReservas" element={<MisReservas />} />
                <Route path="/creacionExitosa" element={<CreacionExitosa />} />
                <Route path="/misProductos" element={<MisProductos />} />
              </Routes>
            </HoraContextProvider>
          </FechaRangoContextProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>

/* Triggering the pipeline, again, again, again, and again */