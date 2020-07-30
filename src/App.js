import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomeLeft from './components/HomeLeft/HomeLeft'
import HomeRight from './components/HomeRight/HomeRight'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-container">
        <HomeLeft />
        <HomeRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
