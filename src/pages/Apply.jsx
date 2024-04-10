import React from 'react'

const Apply = () => {
  
  return (
    
   <div className="contentContainer"><h1>apply!</h1>
   <form action="">
   <div className="formItem">
    <label htmlFor="name">Name: </label> <input type='text' /> 
     </div><div className="formItem">
    <label htmlFor="class">Class: <select>
      <option value=""></option>
      </select></label>
      </div><div className="formItem">
    <label htmlFor="raiderIoLink">RaiderIo link: <input type="url" /></label>
    </div><div className="formItem">
    <label htmlFor='history'>Raiding History: <textarea></textarea></label>
    </div><div className="formItem">
    <label htmlFor='motivation'>Why do you want to join? <textarea></textarea></label>
    </div><div className="formItem">
    <label htmlFor="rules">You have read and understand the rules? <input type="radio" /></label>
    </div>





   </form>
   
   </div>
  )
}

export default Apply