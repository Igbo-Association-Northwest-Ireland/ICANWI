  
  import React, {UseEffect, useRef, useState} from 'react'
  import { useNavigate} from 'react-router-dom';
  import { useLocation } from 'react-router';
  import Minutes from '../../Pages/Minutes';
  import styled from 'styled-components';
  import PageNavigstions from './PageNavigations';
  import Modals from './Modals';
  import Footer from '../../Footer/Footer';
  import image from '../../image/sign1.jpg'
  import Protected from '../../../Protected'
import { useAuth } from '../../../Auth';

  let update = {
    value1:"oOOPS! Something has gone wrong",
    value2:"Username may be incorrect",
    value3:"Password may be incorrect",
    user:"eze@gmail.com",
    passwords:"oji",
    values:'Please login to your account',
    usertext:'Your confidentiality is our priority'
    }
  
    const SignIn = () => {
      const auth = useAuth();
       const locations = useLocation();
    const redirect = locations.state?.path || '/Minutes'
    let refs = useRef(null);
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [protect, setProtect] = useState(true);
    const [password, setPassword] = useState('');
    const [value , setValue] = useState(update.values);
    const [value2 , setValue2] = useState( " ");
    const [value3 , setValue3] = useState("");

    let navigate = useNavigate();
    let location = useLocation();

       const checkStatus = () => {
       if(user!==update.user && password!==update.passwords){
        setValue(update.value1);
        setValue2(update.value2)
        setValue3(update.value3);
        
      }else{
        auth.SignIn(user)
        navigate(redirect, {replace: true})
        refs.current.value= "";
      }
    }; 
  
   const handleLogin = ()=>{
   checkStatus();
   }

   

  return (
   <>
{ <PageNavigstions mode={Modals} className='fixed top-0' />} 
<SECTION className="h-100 gradient-form bg-slate-100 mt-16 mb-16">
  <div className="container cover h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4 form-body">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{width: "185px"}} alt="logo"/>
                  <h4 className="mt-1 mb-5 pb-1">We are a Charitable Group</h4>
                </div>

                <form className='bg-z' onSubmit={(e)=>e.preventDefault()}>
                  <h6>{value}</h6>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11 " className="form-control sign-input"
                      placeholder="Phone number or email address" required='required'
                      onChange={(e)=>setUser(e.target.value)} 
                      ref={refs} 
                      />
                      <label className="form-label" for="form2Example11">
                      Username<span className="text-danger mx-2 text-xs" > {value2}</span>
                      </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22 " 
                    placeholder='include number and special character' required='required'
                    className="form-control sign-input" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                     <label className="form-label" for="form2Example22">
                      Password<span className="text-danger mx-2 text-xs"> {value3}</span>
                      </label>
                  </div>

                  <div className="text-center pt-1 mb-3 pb-1">
                    <button className=
                    "btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 me-2" 
                    type="button" onClick={handleLogin}>
                      Log
                      in</button>
                   
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Sign up</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Humanity and the Future | How Bright</h4>
                <p className="small mb-0">The sustainable future of humanity is not a difficult issue if a culture that values human nature can be developed. Regardless of color, race, or gender, each of us is a human being in God's eyes and deserves to be treated as such. The concept is not complicated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/*   {<Footer/>} */}
</SECTION>
</>
  );
  }

export default SignIn

const SECTION = styled.div`
margin:0; 
position:relative;
.cover{
height:auto !important;
padding-bottom: 1rem !important;
padding-top: 6rem !important;
}
`