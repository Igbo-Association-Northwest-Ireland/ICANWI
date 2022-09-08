import React from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap'
import styled from 'styled-components';
import video1 from '../video/bg-video.mp4'
import video2 from '../video/relay4life.mp4'
import {FiSearch} from "react-icons/fi";



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
        
        <ROWS className='what-we-do-content'>
        <COL className = 'col col-cultural-integration'>
        <Card  className='cards card-integration'>
          <div variant="top" className='integration-img int'>
          <a href="#" className="btn btn-primary btn-link ">
          <span className='span'/></a>
          </div>
          <Card.Body className='cards-body'>
            <Card.Title>Cultural Integration</Card.Title>
            <Card.Text>
            While people are interested in participating in a wider society, they would also like to retain and express their heritage culture. Through cultural integration, this association has been committed to providing individuals with the opportunities to model their heritage culture and experience a higher quality of life within the community 

            <span><Button className='btn-sm text-primary bg-transparent border-0' >Read more</Button></span>
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>
          
        <COL className='col col-Equality'>
        <Card  className='cards card-Equality'>
          <div variant="top" className='Equality-img eq'>
          <a href="#" className="btn btn-primary btn-link ">
         <span className='span'/></a>
          </div>
          <Card.Body className='cards-body'>
            <Card.Title>Equality and Diversity</Card.Title>
            <Card.Text>
            It is important to view others humanely in a culture that values humane orientations. As a group, we understood how lonely people can feel, as well as how emotionally stressful it can be to feel that you are alone. Our goal has been to promote altruistic behavior, and harmony between different races.  
            <span><Button className='btn-sm text-primary bg-transparent border-0'>Read more</Button></span>
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>

        <COL className='col col-Volunteering'>
        <Card  className='cards card-Volunteering'>
          <div variant="top" className='Volunteering-img'>
          <a href="#" className="btn btn-primary btn-link ">
          <span className='span'/></a>
          </div>
          <Card.Body className='cards-body'>
            <Card.Title>Volunteering</Card.Title>
            <Card.Text>
            We have freely donated our time to the benefit of our community and other organizations. Also made significant contributions to the development of social conditions in the North-West region. On the other hand, it has been extremely beneficial to the group in terms of expanding our network and giving us a sense of purpose and belonging.<span><Button className='btn-sm text-primary bg-transparent border-0' >Read more</Button></span>
            </Card.Text>
          </Card.Body>
          </Card>
          </COL>
        <COL className='col col-Charity'>
        <Card  className='cards card-Charity'>
        <div variant="top" className='Charity-img'>
        <a href="#" className="btn btn-primary btn-link ">
        <span className='span'/></a>
        </div>
        <Card.Body className='cards-body'>
        <Card.Title>Charity Activities</Card.Title>
        <Card.Text>
             As a charitable organization, it is our moral duty to help others when we can. Accordingly, We have offered assistance to the community and to people in need through giving. However, We have benefited not only by feeling more content and fulfilled, but by making new friends, learning various skills, and growing professionally.<span><Button className='btn-sm text-primary bg-transparent border-0'>Read more</Button></span>
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
    const COL = styled(Col)`
    `
/*A culture that values human orientation 
emphasizes the importance of viewing others humanly;
this includes promoting empathy, altruistic behaviors, 
and harmony among different races, cultures, and religions.*/