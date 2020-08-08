import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar/Navbar'
import HomeLeft from './components/HomeLeft/HomeLeft'
import Footer from './components/Footer/Footer'

function App() {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const getData = async () => {
    const url = 'https://services1.arcgis.com/vHnIGBHHqDR6y0CR/arcgis/rest/services/COVID19_Time_Series/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
    
    let res = await axios.get(url);
    let data = res.data.features.sort((a, b) => (b.attributes.Date - a.attributes.Date));
    setData(data);
    setIsLoading(false);
    console.log(data);
  }
  
  useEffect(() => {
    getData();
  }, [])

  const defaultData = [
    {
      attributes: {
        ACT: 0,
        ACT_Deaths: 0,
        NSW: 0,
        NSW_Deaths: 0,
        NT: 0,
        NT_Deaths: 0,
        QLD: 0,
        QLD_Deaths: 0,
        SA: 0,
        SA_Deaths: 0,
        TAS: 0,
        TAS_Deaths: 0,
        VIC: 0,
        VIC_Deaths: 0,
        WA: 0,
        WA_Deaths: 0,
        Total_Cases: 0,
        Total_Deaths: 0
      }
    },
    {
      attributes: {
        Total_Cases: 0,
        Total_Deaths: 0
      }
    }
  ]

  return (
    <div className="App">
      <Navbar />
      <HomeLeft data={ isLoading ? defaultData : data } />
      <Footer />
    </div>
  );
}

export default App;
