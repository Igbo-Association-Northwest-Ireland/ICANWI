import React from 'react'
import { FiSearch} from "react-icons/fi";
import {Card, Row, Col, Button, Container} from 'react-bootstrap'
import Kinsley from '../image/img/kings5.jpeg'
import chuks from '../image/chuks.png'
import ogidi from '../image/ogidi.png'
import franco from '../image/img/franco.jpg'
import obinna from '../image/img/austine.jpeg'
import ugo from '../image/ugo.jpg'
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
<Row className='py-16 team-card-row'>
<Container>
  <TCardCover className='Team'>

  <TCard className="card position-relative" >
 <div className ='card-image'> 
 <img src={ogidi}
  className='rounded-4xl ogidi card-img-top'/>
  </div>
  <div className="card-body">
    <h5 className="card-title T-title">Charles Obodoechina</h5>
    <p className="card-text team-position">Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>

<TCard className="card position-relative">
<div className ='card-image'> 
 <img src={Kinsley}
  className='rounded-4xl kingsley card-img-top'/>
  </div>
  <div className="card-body">
    <h5 className="card-title T-title top-1">Kingsley Agoha</h5>
    <p className="card-text team-position">Vc. Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>

<TCard className="card position-relative">
<div className ='card-image'> 
 <img src={franco}
  className='rounded-4xl franco  card-img-top'/>
  </div>

  <div className="card-body">
    <h5 className="card-title T-title">Francis Udoku</h5>
    <p className="card-text team-position">Secretary</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
  </TCard >

  <TCard className="card position-relative">
  <div className ='card-image'> 
 <img src={ugo}
  className='rounded-4xl ugo card-img-top'/>
  </div>
  <div className="card-body">
    <h5 className="card-title T-title">Ugo Nwankwo</h5>
    <p className="card-text team-position">Financial Secretary</p>
     <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
  </TCard >


  <TCard className="card position-relative">
  <div className ='card-image'> 
 <img src={chuks}
  className='rounded-4xl chuks card-img-top'/>
  </div>
  <div className="card-body">
    <h5 className="card-title T-title ">Chuks Ogujawa</h5>
    <p className="card-text team-position">Treasurer</p>
    <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>

  <TCard className="card relative">
  <div className ='card-image '> 
 <img src={obinna}
  className='rounded-4xl austine card-img-top'/>
  </div>
  <div className="card-body">
    <h5 className="card-title T-title">Austine Okeagu</h5>
    <p className="card-text team-position">Provost</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>


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
align-items:center;
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

@media(max-width:1230px){
  grid-template-columns:repeat(3, auto);
}
@media(max-width:786px){
  grid-template-columns:repeat(1, auto);
}

`
const TCard = styled.div`
box-sizing :border-box;
max-height:20rem;
min-width:13rem;
max-width:13rem;
display:flex;
align-items:center;
justify-content:center;
margin:2%;
border:none !important;
background:transparent !important;
position:relative;



.card-image{
min-height:16rem !important;
max-height:16rem !important;
min-width:100%;
overflow:hidden;
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
   .card-body{
      min-height:4rem !important; 
      max-height:4rem !important; 
      min-width:100%;
      background:transparent !important;
 
    }

   @media(max-width:786px){
    min-width:20rem;
    min-height:24rem !important;

   .card-body, .card-image, img{
    min-width:20rem !important;
   }
    .card-image{
     min-height:18rem !important;
     max-height:18rem;
     img{min-height:18rem !important}
    }
    .card-body{
      min-height:6rem !important;
      max-height:6rem !important;
     
    }
   }
    
   
   
    h5, p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #1e154e;
    font-weight: 600; 
  
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