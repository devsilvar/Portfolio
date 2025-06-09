import { useState } from 'react';
import { Navbar } from './Components';
import { Footer } from './Container';
import SmallScreenFooter from './Container/Footer/SmallScreenFooter';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Course from './Pages/Course';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
        </Routes>
        <SmallScreenFooter />
      </div>
    </>
  );
}

export default App;
