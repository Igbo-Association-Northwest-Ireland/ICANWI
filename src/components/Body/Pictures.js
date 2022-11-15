import React from 'react'
import women from '../image/womenGpic.JPG'
import men from '../image/menGpic.JPG'
import { Button } from 'react-bootstrap'
import {useNavigate, Routes, Route} from 'react-router-dom';
import Gallary from '../Pages/Gallary';
import styled from 'styled-components'


const Pictures = () => {
  let navigation = useNavigate();
 function onNavigation(){
    navigation('/Gallary')
  }
  return (
    
    <div className="carol-2"> 
    <div className="container pb-3">
<div className="carousel-example-2 carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
{/* <!--Indicators-->
 */}
 <ol className="carousel-indicators">
<li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
<li data-target="#carousel-example-2" data-slide-to="1"></li>
<li data-target="#carousel-example-2" data-slide-to="2"></li>
</ol>
    <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view">
        <img className="d-block w-100" src={men} alt="First slide"/>
        <div className="mask rgba-black-light"></div>
      </div>
      <FOTO className=" photo-caption relative">
        
      <Button className=' border-0 butin' 
      style={{color:'#ffffff', fontWeight:'600', 
      fontFamily:'font-family: Arial, Helvetica, sans-serif', 
      fontSize:'1.5rem'
    }}
     onClick={onNavigation} 
      >Click to explore our Gallery</Button>
      </FOTO>
    </div>
  </div>
  
 
{/*   <!--/.Controls-->
 */}  </div>
</div>

</div>

  )
}
export default Pictures
const FOTO = styled.div`
min-width:100%;
max-width:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
min-height:50px;
max-height:50px;
overflow:hidden;
border:1px solid #222d;
.butin{
  position:absolute;
  top:50%;
  right:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:100% !important;
  background:#000009
}

`