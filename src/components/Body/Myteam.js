import React from 'react'
import { FiSearch} from "react-icons/fi";
import {Card, Row, Col, Button, Container} from 'react-bootstrap'
import francis from '../image/friday.png'
import Kinsley from '../image/img/kings.jpeg'
import chuks from '../image/chuks.png'
import ogidi from '../image/ogidi.png'
import Djimg from '../image/DJimg.jpg'
import mypic1 from '../image/mypic1.jpg'
import franco from '../image/img/franco.jpg'
import thanks from '../image/thanks1.png'
import obinna from '../image/img/obinna.png'
import ugo from '../image/ugo.jpg'
import logo from '../image/logo.png'
import styled from 'styled-components'



const Myteam = () => {

  return (
    <TEAM className='team Container-fluid '>
   
<Row>
    <Ttitle>
    <h4>Meet Our Executive Committe</h4>
    <p className='paragraph'>A dedicated group of experts with 
      complementary skills who have always found a way to do 
      things effeciently and effectively.
    </p>
    </Ttitle>
</Row>
<Row className='pb-1' style={{minHeight:'300px', maxHeight:'auto'}}>
<Container mx-auto>
  <TCardCover className='mx-auto Team'>
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  <img src={chuks}
  className=' avatar rounded-4xl card-img-top mx-auto relative top-2'/>
  <div className="card-body">
    <h5 className="card-title T-title ">Chuks Ogujawa</h5>
    <p className="card-text team-position">Treasurer</p>
    <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  < img src={Kinsley}
   className='avatar rounded-4xl card-img-top mx-auto relative top-2'
    />
  <div className="card-body">
    <h5 className="card-title T-title top-1">Kingsley Agoha</h5>
    <p className="card-text team-position">Vc. Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  < img src={ogidi}
  className=' avatar rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Ogidi</h5>
    <p className="card-text team-position">Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  < img src={obinna}
  className='avatar rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Austine Okeagu</h5>
    <p className="card-text team-position">Provost</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  < img src={ugo}
   className='avatar rounded-4xl card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Ugo Nwankwo</h5>
    <p className="card-text team-position">Finacial Secretary</p>
     <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
  </TCard >
  <TCard className="card position-relative" style={{width: "12rem", minHeight:'12rem'}}>
  < img src={franco}
  className=' avatar rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Francis Udoku</h5>
    <p className="card-text team-position">Secretary</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
  </TCard >
     </TCardCover>
    </Container>
  </Row>

    </TEAM>
  )
}

export default Myteam

const TEAM = styled.div`
@media(max-width:786px){
  min-height:40vh;
  height: auto !important;
  padding-bottom:10%
}

`

const Ttitle = styled(Col)`
display:flex;
flex-direction:column;
justify-content: center;
align-items:middle;
text-align: center;
padding: 3rem 0 2rem 0;
color:#ffffff;
.paragraph{max-width: 500px;
padding: 1rem; 
margin:auto; 
transform:translateY(-20%)
}
@media(max-width:786px){
  font-family:Tahoma, sans-serif;
  padding: 3rem 0 3rem 0;

.paragraph{max-width: 500px;
padding: 1rem 1.4rem 1rem 1.4rem;
 margin:auto; 
 font-size: 1rem;
transform:translateY(-20%)
  }
}
`
const TCardCover = styled(Col)`
display:grid;
grid-template-columns:repeat(6, auto);
gap:1%;
justify-content:center;
align-content:center;
border:none !important;
box-shadow:none !important;
@media(max-width:960px){
  grid-template-columns:repeat(3, auto);
}
@media(max-width:760px){
  grid-template-columns:repeat(1, auto);
}

`

const SearchIcon = styled(FiSearch)`
font-size:1.5rem;
color:white;
display:block;
position:absolute;
top:30%;
left:45%;
&:hover{
transform:scale(1.5)
}

`
const TCard = styled.div`
box-sizing :border-box;
max-height:20rem;
margin:2%;
border:none !important;
background: none !important;

img{
/* box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;
 */min-height:12rem !important;
   max-height:12rem !important;
   opacity: 1;
  
}
a{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  width:100%;
  height:100%;
  opacity:0.5;
   }
   @media(max-width:760px){
    width:18rem !important;
    min-height:22rem !important;
    max-height:22rem !important;
    overflow:hidden;

    a{
  left:0;
  right:0;
  bottom:0;
  top:-16rem;
  min-width:18rem;
  min-height:15rem;
  opacity:0.1;
   }
    .card-body{
      min-height:25% !important; 
      max-height:25% !important; 
      min-width:100%;
      position:absolute;
      top:75%;
      left:0
    }
    img{
      min-width:100% !important;
      min-height:70% !important; 
      max-height:70% !important; 
      position:absolute;
    }
    h5, p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #1e154e;
    font-weight: 600; 
  
    }
 
    }
`

