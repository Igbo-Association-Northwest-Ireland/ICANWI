import React from 'react'
import styled from 'styled-components'
import blacklife from '../image/blacklife.jpg'

const HeroImage = () => {
  return (
  
    <OVER className="bg-image"
     >
  <div className="mask position-relative">
    <div className="d-flex justify-content-left overlay align-items-center h-100 position-relative">

      
<div className= "card cd  position-absolute" style={{width: "26rem"}}>
  <div className="card-body cab relative">
    <h6 className="card-title text-white mb-0 text-4xl c-h6">  
      <span className='sp'>Igbo Cultural Association North-west Ireland</span>
    </h6>
    <p className="card-text c-text">
      Founded in 2010 with the shared goal of 
      promoting peace and unity through cultural integration,
      participating and volunteering
    </p>
    <a href="#" className="btn button" 
    style={{ background:'#1e154e', color:'white'}}>
      Read More
      </a>
  </div>
  <div className="overlays   position-absolute ov" ></div>
</div>
     
    </div>
  </div>
    </OVER>
   
  )
}

export default HeroImage
const OVER = styled.div`
position:relative;
.mask{
    background-color: rgba(0, 0, 0, 0.2);
    .overlay{
        padding:10.5rem;
        position:relative;
        .card{
          background:transparent !important;
          border-radius: 45px/15px;        
          left:5%;
          top:27%;
          font-family: verdana;
 
          .card-title{
           color:azure !important;
           font-size:1.5rem;
           font-weight:900;
           font-family: verdana;
           line-height:2.5rem;
           z-index:25;
           text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
          }
         .card-text{
          text-align:center;
          font-size: 15px;
          font-weight:700;
          color:#f7a400;
          letter-spacing:1px;
          text-shadow: 2px 2px 2px rgba(0,0,0,0.7);
          font-family: 'Josefin Sans', sans-serif;


        }
        .button{
          z-index:25 !important;
        }
        .overlays{
          width:100%;
          height:100%;
          left:0;
          right:0;
          top:0;
          bottom:0;
          background:#1e154e;
          opacity:0.2;
  
   
        }
    }
  }
}
`
/* const IMGOUTER = styled.div`
min-width:100%;
max-height:400px;
min-height:500px;
background-color:#1e154e;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(0deg, rgba(255 255 255 / 54%), rgba(252 0 150 / 69%)), url('/conferm.jpg');
    background-repeat:no-repeat;
    background-size: cover;
    background-position:30% 35%;
    border-bottom-right-radius: 160% 120%;
    border-top-left-radius: 150% 5%;
    border-bottom-left-radius: 25% 10%;

img{
    min-width:100%;
    min-height:100%;
    border-bottom-right-radius: 100% 75%;
  
}
.overlay{
    position:absolute;
    left:0;
    right:0;
    bottom:100%;
    top:0;
    width:100%;
    height:100%;
    background: linear-gradient(0deg, rgba(255 255 255 / 54%), rgba(255 0 150 / 69%));
    display:table;
}
`
/* font-family: 'Open Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif; */
 
/* background: #6a85b6;

  /* Chrome 10-25, Safari 5.1-6 
  background: -webkit-linear-gradient(to top, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5));

   W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
  background: linear-gradient(to top, rgba(106, 133, 182, 0.5), rgba(186, 200, 224, 0.5)) 
  
  backdrop-filter: contrast(140%) brightness(100%) saturate(100%) sepia(50%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px);
    mix-blend-mode: lighten;
    background: rgba(161, 44, 199, 0.31);
    opacity: 1;
  
  */