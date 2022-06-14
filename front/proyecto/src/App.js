import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Productos from './pages/Productos';
import Reserva from './pages/Reserva';
import { IdProductoContextProvider } from './components/context/IdProductoContext';


function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);


  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar pageWrapId={'page-wrap'} authenticated={isAuthenticated} />
      <IdProductoContextProvider>
        <Routes>
          <Route path='/' element={<Home  authenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/account' element={<Account />} />
            <Route path='/productos/:id' element={<Productos />} />
            <Route path='/producto/:id/reserva' element={<Reserva/>} />
        </Routes>
        </IdProductoContextProvider>
      </BrowserRouter>
    </div>
  );

}

export default App;


//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>