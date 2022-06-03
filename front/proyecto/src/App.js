import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Productos from './pages/Productos';


function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);


  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar pageWrapId={'page-wrap'} authenticated={isAuthenticated} />
        <Routes>
          <Route path='/' element={<Home  authenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/productos' element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;


//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>