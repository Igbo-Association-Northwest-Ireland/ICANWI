import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import video1 from '../video/bg-video.mp4'
import video2 from '../video/relay4life.mp4'
import { FiSearch} from "react-icons/fi";


const WhatweDo = () => {
  return (
    
        <div className=' contcaianer-fluid position mt-3 mb-3 what-we-do-cover'>
       <COLHeader className='what-we-do-title container'>
        <h3>What We Do</h3>
        <video autoPlay muted loop>
          <source src={video2} type="video/mp4" muted preload="metadata" loop/>
          Your browser does not support the video tag.
           </video>
        </COLHeader>
        


        <ROWS>
        <COL className = 'col col-cultural-integration'>
        <Card  className='cards card-integration'>
          <ARCHOR variant="top" className='integration-img int'>
          <a href="#" className="btn btn-primary btn-link ">
          <SearchIcon className='searchIcon'/></a>
          </ARCHOR>
          <Card.Body className='cards-body'>
            <Card.Title>Cultural Integration</Card.Title>
            <Card.Text>
            Building a community 
            where everyone lives as brothers and sister 
             is the integral objective and focus of this group. 
             We have been committed in achieving unity and
              peace through cultural diversity and inclusion
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>
          
        <COL className='col col-Equality'>
        <Card  className='cards card-Equality'>
          <ARCHOR variant="top" className='Equality-img eq'>
          <a href="#" className="btn btn-primary btn-link ">
         <SearchIcon className='searchIcon'/></a>
          </ARCHOR>
          <Card.Body className='cards-body'>
            <Card.Title>Equality and Diversity</Card.Title>
            <Card.Text>
            Loneliness is a burden but having the sense of walking alone is mentally distressing. Our focus is on building one tent that can accomodate everyone regardless your race or genda. 
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>

        <COL className='col col-Volunteering'>
        <Card  className='cards card-Volunteering'>
          <ARCHOR variant="top" className='Volunteering-img'>
          <a href="#" className="btn btn-primary btn-link ">
          <SearchIcon className='searchIcon'/></a>
          </ARCHOR>
          <Card.Body className='cards-body'>
            <Card.Title>Volunteering</Card.Title>
            <Card.Text>
            We have offered assistance to the community and to people in need through volunteering and participation. However, it has also helped members make friends, learn new skills, and develop their careers
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>
        <COL className='col col-Charity'>
        <Card  className='cards card-Charity'>
          <ARCHOR variant="top" className='Charity-img'>
          <a href="#" className="btn btn-primary btn-link ">
          <SearchIcon className='searchIcon'/></a>
          </ARCHOR>
          <Card.Body className='cards-body'>
            <Card.Title>Charity Activities</Card.Title>
            <Card.Text>
            We have offered assistance to the community and to people in need through volunteering and participation. However, it has also helped members make friends, learn new skills, and develop their careers
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>

          </ROWS>
       </div>
    
      )
    }
    export default WhatweDo   
    const COLHeader = styled(Col)``
    const ROWS = styled(Row)`
     display:grid;
     grid-template-columns:repeat(4, auto);
     justify-items:center;
     align-items:center;
     @media(max-width:992px){
      grid-template-columns:repeat(2, auto);
     }
     @media(max-width:786px){
      grid-template-columns:repeat(1, auto);
     }
     .col{
      padding:2% !important;
      min-width:15rem !important;
    
     @media(max-width:786px){
      max-width: 100% !important;
      min-width:100% !important;
     padding:2% !important;
    }

    }
    `

  const ARCHOR = styled.div`
  .btn-link{
  position:absolute;
  left:0;
  right:0;
  bottom:50%;
  top:0;
  width:100%;
  height:50%;
  opacity:0.5;
  
    .searchIcon{
     font-size:1.5rem;
     color:white;
     display:block;
     position:absolute;
     top:30%;
     left:45%;
     transition:cubic-bezier(0.175, 0.885, 0.32, 1.275);
     visibility:hidden;
    }
    :hover .searchIcon{
      visibility:visible;
    }
   
  }
  `
     const SearchIcon = styled(FiSearch)`
     &:hover{
     transform:scale(1.8);
     cursor:pointer;
     }
    `
    const COL = styled(Col)`
    `
