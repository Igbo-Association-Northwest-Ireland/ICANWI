import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Minutes from '../Pages/Minutes'
import styled from 'styled-components'

let pw ="ego";
let user = "nze"
let values = 'Please Sign in your username and password'
let usertext = 'Your confidentiality is our priority'
let vex = {
value1:"oOOPS! Something has gone wrong",
value2:"Username may be incorrect",
value3:"Password may be incorrect"
}


function Forms() {
  let refs = useRef(null)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [handleShow , setShow] = useState(true);
  const [value , setValue] = useState(values);
  const [value2 , setValue2] = useState(usertext);
  const [value3 , setValue3] = useState("");
  let navigate = useNavigate();

  const checkStatus = () => {
    if(username!==user && password!==pw){
      setValue(vex.value1);
      setValue2(vex.value2)
      setValue3(vex.value3);
      vex.value2.style.color='red'
      
    }else{
     
      setValue(values)
      window.open('http://localhost:3000/Minutes', '_blank');

    }
  }; 

 const handleSubmit = ()=>{
 checkStatus();
 refs.current.value= ""

}
  return (
    <div className='container p-48'>
      <FORM className='bg-dark p-16'>
      <h4 className='text'>{value}</h4>
      <div className="mb-3">
    <label for="username" className="form-label">Username</label>
    <input type="text" className="form-control w-20" 
     onChange={(e)=>setUsername(e.target.value)} ref={refs}/>
    <div className="text">
    {value2}
    </div>
  </div>
  <div className="mb-3">
  <label for="Password1"
  className="form-label">Password</label>
  <input type="password" className="form-control w-20" 
   onChange={(e)=>setPassword(e.target.value)}/>
    <div className="text-danger">
    {value3}
    </div>
  </div>
  <button className="btn btn-primary" 
  onClick={handleSubmit}>Submit</button>
  </FORM>
</div>

  );
}

export default Forms
const FORM = styled.div`
max-width: 650px !important;
`