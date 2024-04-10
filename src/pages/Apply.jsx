import React from 'react'
import "../styling/Apply.css"

const Apply = () => {
  
  return (
    
   <div className="contentContainer"><h1>apply!</h1>
   <form action="">
   <div className="formItem">
    <label htmlFor="name">Name: </label> <input type='text' /> 
     </div><div className="formItem">
    <label htmlFor="class">Class: </label><select>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      </select>
      </div>
    <div className="formItem">
    <label htmlFor="raiderIoLink">RaiderIo link: </label>
    <input type="url" />
    </div>
    <div className="formItem">
    <label htmlFor='history'>Raiding History: </label><textarea></textarea>
    </div>
    <div className="formItem">
    <label htmlFor='motivation'>Why do you want to join? </label><textarea></textarea>
    </div>
    <div className="formItem">
    <label htmlFor="rules">You have read and understand the rules? </label>
    <input type="radio" name="rules" value="yes" id='rulesYes' /> <label htmlFor="rulesYes">Yes</label>

    <input type="radio" name="rules" id='rulesNo' value="no" /> <label htmlFor="rulesNo">No</label>
    </div>

<div className="formItem"><input type='submit'/></div>



   </form>
   
   </div>
  )
}

export default Apply