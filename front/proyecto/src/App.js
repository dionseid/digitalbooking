import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Productos from './pages/Productos';
import Reserva from './pages/Reserva';
import { FechaRangoContextProvider } from './components/context/FechaRangoContextProvider';
import ReservaExitosa from './pages/ReservaExitosa';
import {UserProvider} from './components/context/UserContext';
import { HoraContextProvider } from './components/context/HoraContextProvider';


function App() {
  //// const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const user = useContext(UserProvider);

  return (
    <div className="App">
    {console.log(user?.user)}
        <BrowserRouter>
      <UserProvider>
          <Sidebar pageWrapId={'page-wrap'} authenticated={user?.user.auth} />
          <FechaRangoContextProvider>
            <HoraContextProvider>
            <Routes>
              <Route path='/' element={<Home  authenticated={user?.user.auth}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/account' element={<Account />} />
                <Route path='/productos/:id' element={<Productos />} />
                <Route path='/producto/:id/reserva' element={<Reserva/>} />
                <Route path='/reservaExitosa' element={<ReservaExitosa/>} />
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