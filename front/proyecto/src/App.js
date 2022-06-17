import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Productos from './pages/Productos';
import Reserva from './pages/Reserva';
import { IdProductoContextProvider } from './components/context/IdProductoContext';
import {UserContext, UserProvider} from './components/context/UserContext';


function App() {
  //// const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const {user} = useContext(UserContext); 

  return (
    <div className="App">
        <BrowserRouter>
      <UserProvider>
          <Sidebar pageWrapId={'page-wrap'} authenticated={user.auth} />
          <IdProductoContextProvider>
            <Routes>
              <Route path='/' element={<Home  authenticated={user.auth}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/account' element={<Account />} />
                <Route path='/productos/:id' element={<Productos />} />
                <Route path='/producto/:id/reserva' element={<Reserva/>} />
            </Routes>
          </IdProductoContextProvider>
      </UserProvider>
        </BrowserRouter>
    </div>
  );

}

export default App;


//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>