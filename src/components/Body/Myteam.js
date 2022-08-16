import React from 'react'
import { FiSearch} from "react-icons/fi";
import {Card, Row, Col, Button, Container} from 'react-bootstrap'
import francis from '../image/friday.png'
import Kinsley from '../image/Kinsley.png'
import chuks from '../image/chuks.png'
import ogidi from '../image/ogidi.png'
import Djimg from '../image/DJimg.jpg'
import mypic1 from '../image/mypic1.jpg'
import franco from '../image/img/franco.jpg'
import thanks from '../image/thanks1.png'
import obinna from '../image/img/obinna.png'
import styled from 'styled-components'
import FAF9F0 from 'react-avatar';
import Avatar from 'react-avatar';



const Myteam = () => {

  return (
    <TEAM className='team Container-fluid '>
   
<Row>
    <Ttitle>
    <h4>Meet Our Executive Committe</h4>
    <p>A dedicated group of experts with 
      complementary skills who have always found a way to do 
      things effeciently and effectively.
    </p>
    </Ttitle>
</Row>
<Row>
<Container mx-auto>
  <TCardCover className='mx-auto Team'>
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={chuks}size="130" 
  className='rounded-4xl card-img-top mx-auto relative top-2'/>
  <div className="card-body">
    <h5 className="card-title T-title ">Chuks</h5>
    <p className="card-text team-position">Treasurer</p>
    <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={Kinsley}size="130" 
   className='rounded-4xl card-img-top mx-auto relative top-2'
    />
  <div className="card-body">
    <h5 className="card-title T-title top-1">Kinsley</h5>
    <p className="card-text team-position">Vc. Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={ogidi}size="130" 
  className='rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Ogidi</h5>
    <p className="card-text team-position">Chairman</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={obinna}size="130" 
  className='rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Obina</h5>
    <p className="card-text team-position">Provost</p>
     <a href="#" className="btn btn-primary btn-link ">
      <SearchIcon className='searchIcon'/></a>
  </div>
</TCard>
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={""}size="130"
   className='rounded-4xl card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">others</h5>
    <p className="card-text team-position">Finacial Secretary</p>
     <a href="#" className="btn btn-primary btn-link ">
    <SearchIcon className='searchIcon'/></a>
  </div>
  </TCard >
  <TCard className="card position-relative" style={{width: "12rem"}}>
  <Avatar img src={franco}size="130" 
  className='rounded-4xl  card-img-top mx-auto relative top-2' />
  <div className="card-body">
    <h5 className="card-title T-title">Francis</h5>
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


`

const Ttitle = styled(Col)`
display:flex;
flex-direction:column;
justify-content: center;
align-items:middle;
text-align: center;
padding: 3rem 0 2rem 0;
color:#ffffff;
p{max-width: 500px;
padding: 1rem; margin:auto; 
transform:translateY(-20%)
}
`
const TCardCover = styled(Col)`
display:grid;
grid-template-columns:repeat(6, auto);
justify-content:center;
align-content:center;
border:none !important;
box-shadow:none !important;

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

img{box-shadow: -5px -5px 30px 5px red, 5px 5px 30px 5px blue;}
a{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  width:100%;
  height:100%;
  opacity:0.8;
   }

`

