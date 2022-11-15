import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image1 from '../../image/constimg1.png'
import {Navigate, Link} from 'react-router-dom'


const Pdf = () => {

 const moveTo = ()=>{
<Navigate to="/Consitution" replace={true} />
   
 }
  return (
   <>
 <p>{<img src={image1} alt= 'Big image'/>}</p> 
 <Button as={Link} to='/Constitution' className='constitution w-100'

 >Click to Read More</Button>
   </>
  )
}

export default Pdf