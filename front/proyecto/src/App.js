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
      <BrowserRouter>
      <Sidebar pageWrapId={'page-wrap'} authenticated={jWT} username={username} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;


//<Route path='/login' element={ <> <Navigate to="/login" /> </> }/>