import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import Sidebar from './components/Sidebar';

const jWT = sessionStorage.getItem('jwt');
const username = "Bruno Rodríguez" // hardcodeade: Habrá que consultar a la BD

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} authenticated={jWT ? true : false} username={username} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<> <Navigate to="/login" /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;


//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>