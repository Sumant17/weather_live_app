import React from "react";
import "./descriptions.css";
import { FaArrowCircleDown } from "react-icons/fa";

function Descriptions({weather,units}) {

  const tempUnit = units === 'metric'? "C" : "F"
  const windUnit = units === 'metric'? 'm/s': "m/h"

  const cards =[
    {
      id:1,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id:2,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,

    },
    {
      id:3,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id:4,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id:5,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id:6,
      icon:<FaArrowCircleDown></FaArrowCircleDown>,
      title:"wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];



  return (
    <div className="section section__descriptions">
      {cards.map(({id,icon,title,data,unit})=>(
              <div key={id} className="card">
              <div className="description__card-icon">
                {icon}
                <small>{title}</small>
              </div>
              <h2>{`${data} ${unit}`}</h2>
            </div>

      ))}
      

    </div>
  );
}

export default Descriptions;
