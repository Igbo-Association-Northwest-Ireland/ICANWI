
import React from 'react';

import styled from 'styled-components';
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaGooglePlusSquare, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import {BsYoutube } from "react-icons/bs";

import { Container, Row, Card, Form, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
<FOOTER className="section-6-container pt-12 pb-8 footers
 section-container section-container-image-bg mt-12  " 
 id="section-6">
    <div className="container">
        <div className="row">
            <div className="col section-6 section-description wow fadeIn">
                <h2 color='#1e154e'>Contact Us</h2>
                <div className="minutes">
                    <div className="aside-1">
                        <div className="divider-1 wow fadeInUp"><span></span></div>
                        <p color='#1e154e'>
                        Send us an email using the form below or follow us on our social media channels.</p>
                    </div>

                    <div className="aside2">
                        <p color='#1e154e'>
                        Aready a member, sign in to read the minutes of our meetings</p>
                        <button className="btn btn-customised " 
                        style={{ border: '2px solid #1e154e',
                        borderRadius:'10px', fontWeight:'600',
                        color:'#1e154e' }}>Sign in | Explore more </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
    <div className="col-md-6 section-6-box wow ">
        <h3 className='send-email' color='#1e154e'>By eMail</h3>
        <div className="section-6-form">
            <form role="form" className='mb-3'>
            <div className="form-group my-1">
                <label className="sr-only my-3" for="contact-email">Email</label>
                <input type="text" name="email" placeholder="Email..." className="contact-email form-control" id="contact-email" />
            </div>
            <div className="form-group my-1">
                <label className="sr-only my-3" for="contact-subject">Subject</label>
                <input type="text" name="subject" placeholder="Subject..." className="contact-subject form-control" id="contact-subject" />
            </div>
            <div className="form-group my-1">
                <label className="sr-only " for="contact-message">Message</label>
                <textarea name="message" placeholder="Message..." className="contact-message form-control" id="contact-message"></textarea>
            </div>
            <button type="submit" 
            className="btn-outline btn-customised mt-2 px-3 py-1 send-message" 
            style={{ border: '2px solid #1e154e',
            borderRadius:'10px',
            color:'#1e154e', fontWeight:'600'
            }}><i className="bi bi-paper-plane"></i> Send Message</button>
        </form>
    </div>
            </div>
            <div className="col-md-5 offset-md-1 section-6-box wow media">
                <h3 color='#1e154e'>Follow us</h3>
                <div className="section-6-social">
                <div class="section-6-social socials">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                   </div>
                 </div>
                </div>
              </div>
            </div>
         </FOOTER>

       
<div className='text-center relative cover-footer'
 style={{ backgroundColor: '#ivory', color: '#1e154e' }}>
   <div className='text-center text-lg-left bg-light'>
    
          {/*    <hr className=" "
             style={{ marginTop: '5rem',
              marginBottom: '1rem', 
              borderTop: '1px solid rgba(0, 0, 0, 0.9)' }} 
              /> */}
                    <div className='text-center p-5' 
                       style={{ backgroundColor: '#a2a2a1ff', color: '#1e154e',fontWeight:'600' }}>
                        DinoTech world web Explorer | &copy;  {new Date().getFullYear()} Copyright:{' '}
                        <a style={{color:'#1e154e', fontWeight:'600'}} className='text' href='https://friday-udoku.github.io/fabf.io/'>
                            friday-udoku.github.io
                        </a>
                    </div>
                </div>
            </div>
          
            </>
)
}

export default Footer
const FORMCONTROL = styled(Form.Control)`
border: 1px solid gray;

`
const ROWS = styled(Row)`
.buttons{
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);border:none;
}
`
const FOOTER = styled.div`
.send-email{padding:1rem 0}
.send-message{background:#FF7E00!important;
border:none !important; 
color:whitesmoke !important;
border-radius:5px !important;
padding: 2% 3% !important}
margin-top:0!important;

@media(max-width:786px){
    padding:1.2rem 2rem !important;
}
h3{
 color: #1e154e;
}
`
const MEDIA = styled.div`
  background: rgba(78, 58, 195, 0.5);
  margin-bottom:0 !important;
  min-width:300px;
  padding: 3rem ;
.m-1{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px, 
     rgba(0, 0, 0, 0.12) 0px 4px 6px, 
     rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
   
`
const CONTACT = styled.div`
`
const FOOT = styled.div`
background:#d8d0ff;
color:#1e154e; 
padding:4% 2%; 
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight:700;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
       rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
       rgba(0, 0, 0, 0.06) 0px 2px 1px, 
       rgba(0, 0, 0, 0.09) 0px 4px 2px, 
       rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px,
         rgba(0, 0, 0, 0.09) 0px 32px 16px;

`