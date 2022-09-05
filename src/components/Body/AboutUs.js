

import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import {BsFillPencilFill, BsFillHandThumbsUpFill} from 'react-icons/bs';
import styled from 'styled-components';
import Modalex from './Modalex';

const AboutUs = () => {
  return (
    <div className=" mt-5 About relative container-fluid pt-2">

    <div className="relative pb-3 pt-3 px-0 min-w-full">
        <div className="row about-us relative">
      
          <div className="col-sm-12 col-md-12 left-aside col-lg-8  "
             style={{maxWidth:'55%'}}>
                <h3 className='title'>About Us</h3>
                <p className="medium-paragraph">
                Igbo cultural Association Northwest Ireland is a cultural organised group founded in 2010 with the shared goal of promoting equality, diversity, peace and unity through cultural integration, community engagement,  participation and volunteering
                </p>
                <p>
                  At the heart of our purpose is our commitment to Inclusion and charitable Activites, fostering an inclusive and diverse social environment where everyone has the voice and support to embrace  social life with purpose and respect. Through hard working, self-support and development -we do what we do
                </p>
                <div className="moll  text-dark">{<Modalex/>}</div> 
              </div>
     
         <div className="col-sm-12 col-md-12 right-aside col-lg-4 " 
          style={{width:'45%'}}>
            <div className="text p-0 ">
              <h5 className="mt d-flex"
               style={{color:'#0000009', fontWeight:'700'}}>
                <BsFillHandThumbsUpFill className='thumbup'
                color='#900C3F'/>
               <span className='mx-2 culture-title'>
                <span className='igbo-value'>Igbos Enviable 
                </span>Cultural Values</span></h5>
               <div className="mt-4 envi-list p-3" 
               style={{ color: '#f2f2f2', fontWeight:'400',
               background: '#561d5e', width:'100%' }}>

                <li className="mt-n1 en-li">Special care to visitors</li>
                <li className="mt-n1 en-li">Children up-bringing <span className ='child'> {'->'}the community affair</span></li>
                <li className="mt-n1 en-li">Respect to elders</li>
                <li className="mt-n1 en-li">Mandatory care for the older people</li>
                <li className="mt-n1 en-li">New born and mother <span className='must'>support {'->'} Mandatory</span></li>
                <li className = "dame en-li">Breast Feeding {'->'} Mandatory </li>
              </div>
            </div>
          </div> 
          </div>
        </div>
  {/*       <hr className="" 
        style={{
        marginTop: '1rem', 
        marginBottom: '1rem', 
        borderTop: '1px solid rgba(0, 0, 0, 0.6)'}}
        /> */}
    </div>
  )
}

export default AboutUs

/* STYLING START HERE */

/* const ROW = styled.div`
display:grid;
grid-template-columns: repeat(2, auto)

` */