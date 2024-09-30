import React from 'react'
import { SiCyberdefenders, SiPlatformdotsh } from "react-icons/si";
import { TbUxCircle } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { CiMobile1, CiCloud  } from "react-icons/ci";
import dataTracks from './Tracksdata';
import './Trackscomponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function Trackscomponent({dataTracks}) {
  return (
    <div className='overall-tracks-component-component card'>
      {dataTracks.map((data,index)=>{
        return (
          <div key={index} className="overall-tracks-component card ">
            <p className='actual-icon'>{data.iconItem}</p>
            <h1 className='track-title'>{data.trackTitle}</h1>
            <p className='container-fluid description-text-track'>{data.trackDescription}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Trackscomponent