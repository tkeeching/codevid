import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar/Navbar'
import HomeLeft from './components/HomeLeft/HomeLeft'

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('summary');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  })

  const getData = async () => {
    const url = `https://api.covid19api.com/${query}`

    let res = await axios.get(url);
    let data = res.data.Countries;
    setData(data);
    setIsLoading(false);

    console.log(data);
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
      <HomeLeft />
      <div>
        {isLoading 
          ? <h3>loading data...</h3> 
          : data.map((entry, index) => (
            <div>
              <h3 key={index}>{entry.Country}</h3>
              <p>Total Cases: {entry.TotalConfirmed}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
