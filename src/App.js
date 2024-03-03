import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GetaBoat from './screen/home/GetaBoat';
import Categories from './screen/home/Categories';
import Footer from './screen/home/Footer';
import Slider from './screen/home/Slider';
import Bestseller from './screen/home/Bestseller';
import Blogs from './screen/home/Blogs';



function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
        <Slider />
        <Bestseller />
        <GetaBoat />
        <Categories />
        <Blogs />
        <Footer />


      </>
    </Router>
  );
}

export default App;
