import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomeLeft from './components/HomeLeft/HomeLeft'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeLeft />
      <Footer />
    </div>
  );
}

export default App;
