import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Tracksform.css'
function Tracksform() {
  return (
    <div className='overall-tracks-form'>
        <div className="overall-tracks-form-form card">
        <h1 className='text-success tracksform-main-title'>Signup</h1>
            <form>
   <input type='text' className='form-control input-field' placeholder='Full Names'/>
   <input type='email' className='form-control input-field' placeholder='Email Adress'/>
   <input type='text' className='form-control input-field' placeholder='Course of study'/>
   <input type='year' className='form-control input-field' placeholder='Year'/>
   <label className='choose-track-label' for="tracks">Choose a Track:</label>
        <select id="tracks" name="tracks" className='form-control input-field'>
            <option value="Cyber Security">Cyber Security</option>
            <option value="UI/UX design ">UI/UX design </option>
            <option value="Web development">Web development</option>
            <option value="Mobile apps development">Mobile apps development</option>
            <option value="Cloud engineering">Cloud engineering</option>
            <option value="Power Platform">Power Platform</option>
        </select>
        <div className="btn-holder">
            <button className='btn btn-warning submit-btn'>Submit</button>
        </div>
   </form>
       


        </div>
        </div>
  )
}

export default Tracksform