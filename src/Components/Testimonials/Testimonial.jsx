import React from 'react'
import './testimonial.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import dataTestimony from './testimony'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <div className='ovearall-testimonial-section'>
         <h3 className='testimonials-title text-dark'>Testimonials</h3> 
         <div className="underline-div"></div>
         <div className="cover-testimonial">

          
    
       
      
       {
          dataTestimony.map((dataItem,index)=>{
            return(
              <div key={index} className="overall-item-testimonial-card">
              <div className="inner-testimonial-container ">
                <div className="user-image">
                <img className='actual-user-img rounded-circle' src={dataItem.userImage} alt = {`image of ${dataItem.clientName}`}/>
                              </div>
                <div className="user-comment">
              <p className='container-fluid'>{dataItem.testimonyText}</p>
                </div>
                <div className="user-social-links">
              <ul className='list-unstyled social-links-testimonial-ul'>
                <li><a href='#'>{dataItem.facebook}</a></li>
                <li><a href='#'>{dataItem.twitter}</a></li>
                <li><a href='#'>{dataItem.linkedIn}</a></li>
              </ul>
                
                </div>
              </div>
             </div>
            )
          })
         

}
         
         </div>
        </div>
  )
}

export default Testimonial