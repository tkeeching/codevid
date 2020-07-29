import React, { useState, useEffect } from 'react'
import './LiveTime.css'

function LiveTime(){
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    let tempDate = new Date()
    let monthAndDate = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate()
    const currDate = monthAndDate
  
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        }, 10000)
    })

    return(
        <div className="date">
            <h5>{currDate} {date}</h5>
        </div>
    )
}

export default LiveTime