import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { JSDOM } from 'jsdom';

import Navbar from './components/Navbar/Navbar'
import HomeLeft from './components/HomeLeft/HomeLeft'
import Footer from './components/Footer/Footer'

function App() {
  let [dataAus, setDataAus] = useState([]);
  let [dataWorld, setDataWorld] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const getData = async () => {
    const urlAus = 'https://services1.arcgis.com/vHnIGBHHqDR6y0CR/arcgis/rest/services/COVID19_Time_Series/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
    
    let resAus = await axios.get(urlAus);
    let dataAus = resAus.data.features.sort((a, b) => (b.attributes.Date - a.attributes.Date));
    setDataAus(dataAus);
    // console.log(dataAus);
  }

  const getWorldData = async () => {
    const urlWorld = 'https://5pkutakl20.execute-api.ap-southeast-2.amazonaws.com/default/app-dev-function';
    
    let resWorld = await axios.get(urlWorld);
    let dataWorld = resWorld.data.body.data;
    setDataWorld(dataWorld);
    setIsLoading(false);
    console.log(dataWorld);
  }
  
  useEffect(() => {
    getData();
    getWorldData();
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
      <HomeLeft data={ isLoading ? defaultData : dataAus } dataWorld={ dataWorld } isLoading={ isLoading }/>
      <Footer />
    </div>
  );
}

export default App;
