import React from 'react'
import styled from 'styled-components'
import blacklife from '../image/blacklife.jpg'
import Drops from '../Header/DropdownContainer/Drops'
import logo from '../image/logorm.png'
import group1 from '../image/group-photorm1.png'
import group2 from '../image/group-photorm2.png'
import ladies from '../image/ladiesGrm.png'
import kids from '../image/3kidrm.png'
import men from '../image/menG.png'


const HeroImage = () => {
  return (
  
    <HEROIMAGE className="hero-image-cover"
     >
  

<div className= "card main-card position-absolute" style={{width: "26rem"}}>
  <div className="card-body hero-card-body relative">
    <h6 className="card-title text-white mb-0 text-4xl c-h6">  
      <span className='card-title-span'><span className='welcome-title'>Welcome <span className='To'>to</span></span> <br/>Igbo Cultural Association North-west Ireland</span>
    </h6>
    <p className="card-text card-texts">
      Founded in 2010 with the shared goal of 
      promoting peace and unity through cultural integration,
      participating and volunteering
    </p>
    <a href="#" className="btn rounded-lg btn-customised button" 
    >
      Read More
      </a>
  </div>
  <div className="overlays position-absolute" ></div>
</div>

{/* DROPDOWN LINK/IMAGES CONTENTS*/}

  <div className=" position-relative ">
{/*     { <Drops style={{zIndex:'100'}} className='ml-5'/>}
 */}      
 </div>
   <div className=' hero-image-inner-item relative top-5'>
      <div className='item d-flex relative'>
      <img className='max-w-48 max-h-48 mt-20 ogene'
        alt="Image" href="#home"
        src={men}
    />
      </div>
      <div className='item d-flex relative'>

      <img className='max-w-42 absolute max-h-36 rounded-circle logo '
        alt="Image" href="#home"
        src={logo}
    />
      </div>
</div>

    </HEROIMAGE>
   
  )
}

export default HeroImage
const HEROIMAGE = styled.div`
position:relative;

.main-card{
  background:transparent !important;
  left:2rem;
  top:5rem !important;
  font-family: verdana;
  z-index: 10;
  border:none;
  .card-body{z-index: 5 !important
  }

  .card-title{
    color:azure !important;
    font-size:1.5rem;
    font-weight:900;
    font-family: verdana;
    line-height:2.5rem;
    z-index:25;
  }
  .card-texts{
  padding-top:1rem;
  text-align:left;
  font-size: 1rem;
  font-weight:700;
  color:#f7a400;
  letter-spacing:1px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
  font-family: 'Josefin Sans', sans-serif;

 }
.button{
  z-index:25 !important;
  border:2px solid white;
  padding:12px 18px;
  color:aliceblue !important;
  background:transparent;
 }
.overlays{
  width:100%;
  height:100%;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:black;
  opacity:0.1;
  z-index:-1;
  border-radius: 10% 30% 50% 70% !important;
  border:none;
 }
@media(max-width:1200px){
margin:0 !important;
padding:0 !important;
.button{
padding:6px !important;
}
}

@media(max-width:992px){
.button{
padding:5px !important;
}
.card-texts{
text-shadow: 2px 2px 0 #201e1e, 4px 4px 0 #252424;
color:chartreuse !important;
text-align: left !important;
}
  }
   @media(max-width:786px){
    margin-left:-2rem!important;
    .button{
    padding:5px !important;
    background:#4d1b50;
  }
  left:10% !important;
  }
  @media only screen and 
  (max-width: 600px) and 
  (min-width: 320px)  {
   left:1.8% !important;
   min-width:100%;
   padding:1rem 2rem !important;

 .card-texts{
  padding-right:1.1rem 
  !important;
  }
   }
  }
`

/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; */
 


 