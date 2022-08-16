
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {React, useState, useEffect} from 'react';
import { FaAngleDown, FaChevronDown, BsChevronCompactDown } from "react-icons/fa";
import {Button,  Container, Card, Form,
Nav, Navbar, NavDropdown, 
Offcanvas, Row, Table, Col} from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton'
import Forms from './Forms';
import video from '../video/bg-video.mp4'
import video1 from '../video/ladyvid.mp4'
import video2 from '../video/masq-vid.mp4'

 /* const videos = [video, video1, video2]
 const vd = videos.map(v=>v)
 console.log(vd) */


 /* "/static/media/bg-video.7625476ee9f620bf5c06.mp4"
  "/static/media/ladyvid.7375e9888127bc4b4f0f.mp4"
  "/static/media/masq-vid.c0cda82510c0a1a2531f.mp4" */
 
 



let value;
let value2 = [];
let title2 = 'Breadcrumb helps to display usseful images';
const ray = [{name: 'fance', address: '10 gleaan'}];
const program = [
  {
    title:"Our Initiative",
    list1:'Mission ',
    list2: 'Vision ', 
    list3:'Objectives ',
  },

  {
  title:"Community Engagement",
  list1:'Dancing ',
  list2: 'participating ', 
  list3:'Volunteering ',
},
  
  {
  title:"Cultural Integration",
  list1:'Dancing ',
  list2: 'Singing ', 
  list3:'Story Telling',
},
  {
  title:"Charitable Event",
  list1:'Giving ',
  list2: 'faudraising ', 
  list3:'Campaigning ',
},
  {
  title:"Equality Diversity",
  list1:'Gender Equality ',
  list2: 'Racial Equality ', 
  list3:'Skill Promotion',
},
  {
  title:"Achievement",
  list1:'Cultural Promotion ',
  list2: 'Charity', 
  list3:'Community Development',
},

]

    const Navigator = ({name, ...props}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [shower, setShower] = useState([]);

  useEffect(()=>{
    setShower(program)
  }, [])
    return (
      <Container className='relative bg-danger' style={{minWidth:'50vh'}}>  
        <Btncover  onClick={handleShow} className="shadow rounded-lg">
         <Icons/>
        </Btncover>
        <Offcanvas show={show} onHide={handleClose} {...props} style={{ minHeight:'300px', maxHeight:'auto'}}>

        <Offcanvas.Header className='offheader video-container m-0 p-0' closeButton >
        <video className="video-fluid z-depth-1 embed-responsive embed-responsive-16by9" autoplay loop controls muted>
                    <source src={video} allowfullscreen/>
                  </video>
                

       {/*  <video autoplay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
           </video> */}
            <Offcanvas.Title className='title caption' style={{paddingLeft:'3rem'}}>ICANWI</Offcanvas.Title>
            <Offcanvas.Title>
              </Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body className='bg-success text-light' style={{minHeight:'100px',paddingBotton:'10px'}}>
            <Container className='d-flex flex-wrap'>   
          {
          shower &&  shower.map((shaws)=>{
            return ( 
            <UL>
              <li>{shaws.title}</li>
              <li>{shaws.list1}</li>
              <li>{shaws.list2}</li>
              <li>{shaws.list3}</li>
            </UL>
            )
          })
        }
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    );
  }
export default Navigator
const UL = styled.ul`
font-size: 1rem;
font-family: 'PT Sans', sans-serif;
;&::first-line{
  font-family: 'Open Sans', sans-serif;
  color:red; 
};
li{margin-top: 10px};
@media(max-width:960px){
  font-size: 13px;
  li{margin-top: 1px};
}
`

const Btncover = styled.button`
transition: 0.8s ease-in-out;
color: white;
position: absolute;
padding: 0 1rem;
transform: translateY(1%);
background:transparent !important;
border:none;
`
const Icons = styled(FaChevronDown)`
  color: whitesmoke;
  position:absolute;
  min-height:100%;
  min-width:100%;
  left:0;
  right:0;
  bottom:0;
  top:0;
  background:transparent;
  border:none;
  font-size:1.5rem;
  transform:translateY(-25%)
 
`
/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; */